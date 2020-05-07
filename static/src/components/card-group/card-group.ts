import * as Flickity from "flickity";

export class CardGroup {
  protected element: HTMLElement;
  protected cardGroup: HTMLElement;
  protected cardGroupNav: HTMLElement;
  protected elementNavNext: HTMLElement;
  protected elementNavPrevious: HTMLElement;
  protected carousel: Flickity;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.cardGroup = this.element.querySelector(".card-group");
      this.cardGroupNav = this.element.querySelector(".card-group-nav");
      this.elementNavNext = this.element.querySelector(".card-group-nav-next");
      this.elementNavPrevious = this.element.querySelector(".card-group-nav-prev");
      if (this.cardGroup.childElementCount > 1) {
        this.carousel = new Flickity(this.cardGroup, {
          contain: true,
          wrapAround: true,
          adaptiveHeight: true,
          prevNextButtons: false,
          watchCSS: true
        });
        this.addCarouselEventListeners();
      } else {
        // Remove nav from card groups with only a single card
        this.element.removeChild(this.cardGroupNav);
      }
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
