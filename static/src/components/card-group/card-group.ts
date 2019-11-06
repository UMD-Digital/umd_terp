import * as Flickity from "flickity";

export class CardGroup {
  protected element: HTMLElement;
  protected elementNavNext: HTMLElement;
  protected elementNavPrevious: HTMLElement;
  protected carousel: Flickity;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.elementNavNext = this.element.querySelector(".card-group-nav-next");
      this.elementNavPrevious = this.element.querySelector(".card-group-nav-prev");
      this.carousel = new Flickity(this.element.querySelector(".card-group"), {
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

export default function initCardGroups() {
  const cardGroups = document.querySelectorAll(".card-group-bg") as NodeListOf<HTMLElement>;

  for (let i = 0; i < cardGroups.length; i++) {
    new CardGroup(cardGroups[i]);
  }
}
