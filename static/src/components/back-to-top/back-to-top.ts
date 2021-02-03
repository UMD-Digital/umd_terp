export class BackToTop {
    private element: HTMLElement;
    private visible: boolean = false;

    constructor(element: HTMLElement) {
        if (!!element) {
            this.element = element;

            this.init();
        }
    }

    private init() {
        this.convertAnchorToButton();
        this.handleScroll();
        this.handleButtonClick();
        this.toggleVisibility();
    }

    private convertAnchorToButton() {
        const button = document.createElement("BUTTON") as HTMLButtonElement;
        button.className = this.element.className;
        button.textContent = this.element.textContent;
        this.element.parentElement.replaceChild(button, this.element);
        this.element = button;
    }

    private handleScroll() {
        let ticking = false;

        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    let visible = window.pageYOffset >= window.innerHeight * 4;
                    if (visible != this.visible) {
                        this.visible = visible;
                        this.toggleVisibility();
                    } else {
                        this.visible = visible;
                    }
                    ticking = false;
                });
            }
            ticking = true;
        });
    }

    private handleButtonClick() {
        this.element.addEventListener("click", () => {
            const options = {
                top: 0,
                left: 0,
            } as ScrollToOptions;

            if (!window.matchMedia("(prefers-reduced-motion)").matches) {
                options.behavior = "smooth";
            }

            window.scrollTo(options);
        })
    }

    private toggleVisibility() {
        this.element.classList[this.visible ? "add" : "remove"]("visible");
        this.element.setAttribute("aria-hidden", `${!this.visible}`);
        this.element.setAttribute("tabindex", `${this.visible ? 0 : -1}`);
    }
}

export default function initBackToTop() {
    const button = document.querySelector(".back-to-top") as HTMLElement;
    new BackToTop(button);
}