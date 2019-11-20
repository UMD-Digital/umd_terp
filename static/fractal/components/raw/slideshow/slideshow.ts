import * as Flickity from "flickity";
import "flickity-imagesloaded";

export class Slideshow {
  protected element: HTMLElement;
  protected elementNavNext: HTMLElement;
  protected elementNavPrevious: HTMLElement;
  protected slides: NodeListOf<HTMLElement>;
  protected slideshow: Flickity;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.elementNavNext = this.element.querySelector(".slideshow-control-next");
      this.elementNavPrevious = this.element.querySelector(".slideshow-control-prev");
      this.slides = this.element.querySelectorAll(".slideshow-item");
      if (this.slides.length > 1) {
        this.slideshow = new Flickity(this.element.querySelector(".slideshow"), {
          contain: true,
          imagesLoaded: true,
          wrapAround: true,
          lazyLoad: 2,
          prevNextButtons: false,
          pageDots: false,
          adaptiveHeight: true
        });
        
        this.addCarouselEventListeners();
        this.handleSlideTransition();
      }
    }
  }

  protected addCarouselEventListeners() {
    this.elementNavNext.addEventListener("click", () => {
      this.slideshow.next();
    });

    this.elementNavPrevious.addEventListener("click", () => {
      this.slideshow.previous();
    });
  }

  protected handleSlideTransition() {
    const currentIndexNode = this.element.querySelector(".slideshow-nav-current-index") as HTMLElement;
    
    this.slideshow.on("change", (index) => {
      currentIndexNode.textContent = index + 1;
    });
  }
};

export default function initSlideshow() {
  const slideshows = document.querySelectorAll(".slideshow-bg") as NodeListOf<HTMLElement>;
  for (let i = 0; i < slideshows.length; i++) {
    new Slideshow(slideshows[i]);
  }
}