export class Card {
  protected element: HTMLElement;
  protected cta: HTMLAnchorElement;
  protected href: string;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.cta = this.element.querySelector(".card-cta");
      if (this.cta && this.cta.hasAttribute("href")) {
        this.href = this.cta.href;

        this.makeEntireCardClickable();
      }
    }
  }

  /**
   * Make card act like a hyperlink and allow user to click anywhere
   * within it to navigate to the href of the cta link
   */
  protected makeEntireCardClickable() {
    this.element.setAttribute("role", "link");
    this.element.setAttribute("tabindex", "0");
    this.element.setAttribute("href", this.href);
    
    this.element.addEventListener("click", () => {
      const target = event.target as HTMLElement;
      
      // Prevent child links from causing navigation
      if (target.tagName.toUpperCase() !== "A") {
        window.location.href = this.href;
      }
    });

    this.element.addEventListener("keydown", (event) => {
      if (event.keyCode === 32 || event.keyCode === 13) {
        window.location.href = this.href;
      }
    });
  }
}

export default function initCards() {
  const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

  for (let i = 0; i < cards.length; i++) {
    new Card(cards[i]);
  }
}