import * as Flickity from "flickity";
import "flickity-imagesloaded";
import Lightbox from "../lightbox/lightbox";

export class Carousel {
  protected element: HTMLElement;
  protected elementNavNext: HTMLElement;
  protected elementNavPrevious: HTMLElement;
  protected items: NodeListOf<HTMLElement>;
  protected carousel: Flickity;
  protected lightbox: any;
  protected lightboxCarousel: Flickity;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.elementNavNext = this.element.querySelector(".carousel-nav-next");
      this.elementNavPrevious = this.element.querySelector(".carousel-nav-prev");
      this.items = this.element.querySelectorAll(".carousel-item");
      
      this.createLightbox();

      this.carousel = new Flickity(this.element.querySelector(".carousel"), {
        contain: true,
        imagesLoaded: true,
        wrapAround: true,
        lazyLoad: 2,
        prevNextButtons: false,
        pageDots: false,
        adaptiveHeight: true
      });

      this.addCarouselEventListeners();
    }
  }

  protected addCarouselEventListeners() {
    this.elementNavNext.addEventListener("click", () => {
      this.carousel.next();
      this.lightboxCarousel.next();
    });

    this.elementNavPrevious.addEventListener("click", () => {
      this.carousel.previous();
      this.lightboxCarousel.previous();
    });
    
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].addEventListener("click", () => {
        this.lightbox.show();
      });
    }
  }

  protected createLightbox() {
    this.lightbox = new Lightbox();

    const carouselClone = this.element.cloneNode(true) as HTMLElement;

    carouselClone.className = "lightbox-carousel";

    this.lightbox.insertChildren(carouselClone);

    this.lightboxCarousel = new Flickity(carouselClone.querySelector(".carousel"), {
      contain: true,
      imagesLoaded: true,
      wrapAround: true,
      lazyLoad: 2,
      prevNextButtons: false,
      pageDots: false,
      adaptiveHeight: true
    });

    carouselClone.querySelector(".carousel-nav-next").addEventListener("click", () => {
      this.carousel.next();
      this.lightboxCarousel.next();
    });

    carouselClone.querySelector(".carousel-nav-prev").addEventListener("click", () => {
      this.carousel.previous();
      this.lightboxCarousel.previous();
    });
  }
}

export default function initCarousels() {
  const carousels = document.querySelectorAll(".carousel-bg") as NodeListOf<HTMLElement>;

  for (let i = 0; i < carousels.length; i++) {
    new Carousel(carousels[i]);
  }
}