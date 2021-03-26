import * as YouTubePlayer from "youtube-player";
import VimeoPlayer from "@vimeo/player";

const videoPausedCacheKey = "hero-video-paused";

export class HomeHero {
    private element: HTMLElement;
    private video: HTMLVideoElement;
    private embedRoot: HTMLElement;
    private embedSource: string;
    private embedId: string;
    private youtubeEmbed: any;
    private vimeoEmbed: any;
    private playButton: HTMLButtonElement;
    private pauseButton: HTMLButtonElement;
    private videoPaused: boolean = false;

    constructor(element: HTMLElement) {
        if (!!element) {
            this.element = element;
            this.video = this.element.querySelector("video");
            this.embedRoot = this.element.querySelector(".home-hero-media-embed");

            this.init();
        }
    }

    private init() {
        this.fetchStateFromLocalStorage();
        if (!!this.video) {
            this.initVideo();
        } else if (!!this.embedRoot) {
            this.initEmbed();
        }
    }

    private fetchStateFromLocalStorage() {
        try {
            this.videoPaused = !!JSON.parse(localStorage.getItem(videoPausedCacheKey));
        } catch(error) {
            console.error(error);
        }
    }

    private initVideo() {
        this.video.addEventListener("loadstart", (event) => {
            const target = event.target as HTMLVideoElement;

            this.createPlayPauseControls();

            if (!this.videoPaused) {
                target.play();
            }
        });

        this.video.addEventListener("play", () => {
            this.playButton.disabled = true;
            this.pauseButton.disabled = false;
        });

        this.video.addEventListener("pause", () => {
            this.playButton.disabled = false;
            this.pauseButton.disabled = true;
        });
    }

    private initEmbed() {
        this.embedSource = this.embedRoot.dataset.source;
        this.embedId = this.embedRoot.dataset.vid;

        switch(this.embedSource) {
            case "youtube": {
                this.initYoutubeEmbed();
                break;
            }
            case "vimeo": {
                this.initVimeoEmbed();
                break;
            }
        }
    }

    private initYoutubeEmbed() {
        this.youtubeEmbed = new YouTubePlayer(this.embedRoot, {
            height: 1080,
            width: 1920,
            videoId: this.embedId,
            playerVars: {
                autoplay: +!this.videoPaused, // Only autoplay if the video hasn't previously been paused
                controls: 0,
                loop: 1,
                modestbranding: 1,
                mute: 1,
                playlist: this.embedId,
            },
        });

        this.youtubeEmbed.on("ready", () => {
            this.createPlayPauseControls();
        });

        this.youtubeEmbed.on("stateChange", (event) => {
            if (event.data === 1) {
                // Handle play event
                this.playButton.disabled = true;
                this.pauseButton.disabled = false;
            } else if (event.data === 2) {
                // Handle pause event
                this.playButton.disabled = false;
                this.pauseButton.disabled = true;
            }
        });
    }

    private initVimeoEmbed() {
        this.vimeoEmbed = new VimeoPlayer(this.embedRoot, {
            id: this.embedId,
            background: true,
            width: 1920,
        });

        this.vimeoEmbed.on("loaded", () => {
            this.createPlayPauseControls();
            if (this.videoPaused) {
                this.vimeoEmbed.pause();
            }
        });

        this.vimeoEmbed.on("play", () => {
            // Handle play event
            this.playButton.disabled = true;
            this.pauseButton.disabled = false;
        });

        this.vimeoEmbed.on("pause", () => {
            this.playButton.disabled = false;
            this.pauseButton.disabled = true;
        });
    }

    private createPlayPauseControls() {
        const buttonsWrap = document.createElement("DIV") as HTMLElement;
        const playButton = document.createElement("BUTTON") as HTMLButtonElement;
        const pauseButton = document.createElement("BUTTON") as HTMLButtonElement;

        buttonsWrap.className = "home-hero-video-controls max-bound outer-pad";
        playButton.className = "home-hero-play-button";
        pauseButton.className = "home-hero-pause-button";

        playButton.disabled = !this.videoPaused;
        pauseButton.disabled = this.videoPaused;

        playButton.setAttribute("aria-label", "Play background video");
        pauseButton.setAttribute("aria-label", "Pause background video");

        playButton.addEventListener("click", () => {
            if (!!this.video) {
                this.video.play();
            } else if (!!this.youtubeEmbed) {
                this.youtubeEmbed.playVideo();
            } else if (!!this.vimeoEmbed) {
                this.vimeoEmbed.play();
            }

            // Persist play state to localStorage for subsequent page loads
            try {
                localStorage.setItem(videoPausedCacheKey, "false");
            } catch(error) {
                console.error(error);
            }
        });

        pauseButton.addEventListener("click", () => {
            if (!!this.video) {
                this.video.pause();
            } else if (!!this.youtubeEmbed) {
                this.youtubeEmbed.pauseVideo();
            } else if (!!this.vimeoEmbed) {
                this.vimeoEmbed.pause();
            }

            // Persist paused state to localStorage for subsequent page loads
            try {
                localStorage.setItem(videoPausedCacheKey, "true");
            } catch(error) {
                console.error(error);
            }
        });

        buttonsWrap.appendChild(pauseButton);
        buttonsWrap.appendChild(playButton);
        this.element.appendChild(buttonsWrap);

        this.playButton = playButton;
        this.pauseButton = pauseButton;
    }
}

export default function initHomeHero() {
    const heroes = document.querySelectorAll(".home-hero") as NodeListOf<HTMLElement>;
    for (let i = 0; i < heroes.length; i++) {
        new HomeHero(heroes[i]);
    }
}
