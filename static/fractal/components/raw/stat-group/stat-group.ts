import * as Flickity from "flickity";

export class StatGroup {
  protected element: HTMLElement;
  protected elementNavNext: HTMLElement;
  protected elementNavPrevious: HTMLElement;
  protected carousel: Flickity;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.elementNavNext = this.element.querySelector(".stat-group-nav-next");
      this.elementNavPrevious = this.element.querySelector(".stat-group-nav-prev");
      this.carousel = new Flickity(this.element.querySelector(".stat-group"), {
        contain: true,
        wrapAround: true,
        adaptiveHeight: true,
        prevNextButtons: false,
        watchCSS: true
      });

      this.addCarouselEventListeners();
    }
  }

  protected addCarouselEventListeners() {
    this.elementNavNext.addEventListener("click", () => {
      this.carousel.next();
    });

    this.elementNavPrevious.addEventListener("click", () => {
      this.carousel.previous();
    });
  }
}

export default function initStatGroups() {
  const statGroups = document.querySelectorAll(".stat-group-bg") as NodeListOf<HTMLElement>;

  for (let i = 0; i < statGroups.length; i++) {
    new StatGroup(statGroups[i]);
  }
}