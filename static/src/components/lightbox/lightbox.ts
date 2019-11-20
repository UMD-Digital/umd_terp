
export default class Lightbox {
  protected element: HTMLElement;
  protected overlay: HTMLElement;
  protected inner: HTMLElement;
  protected content: HTMLElement;
  protected closeButton: HTMLElement;
  protected isVisible: boolean = false;

  constructor() {
    this.init();
    this.handleCloseClick();
    this.handleOverlayClick();
    this.toggleVisibility();
  }

  protected init() {
    this.element = document.createElement("DIV") as HTMLElement;
    this.overlay = document.createElement("DIV") as HTMLElement;
    this.inner = document.createElement("DIV") as HTMLElement;
    this.content = document.createElement("DIV") as HTMLElement;
    this.closeButton = document.createElement("BUTTON") as HTMLElement;

    this.element.className = "lightbox";
    this.overlay.className = "lightbox-overlay";
    this.inner.className = "lightbox-inner";
    this.content.className = "lightbox-content";
    this.closeButton.className = "lightbox-close-button";

    this.closeButton.setAttribute("aria-label", "Close lightbox");
    this.closeButton.innerHTML = `<span class="sr-only">Close lightbox</span>`;

    this.element.appendChild(this.overlay);
    this.element.appendChild(this.closeButton);
    this.inner.appendChild(this.content);
    this.element.appendChild(this.inner);

    document.body.appendChild(this.element);
  }
  
  protected handleCloseClick() {
    this.closeButton.addEventListener("click", () => {
      this.hide();
    });
  }

  protected handleOverlayClick() {
    this.overlay.addEventListener("click", () => {
      this.hide();
    });
  }

  protected show() {
    this.isVisible = true;
    this.toggleVisibility();
  }

  protected hide() {
    this.isVisible = false;
    this.toggleVisibility();
  }

  protected toggleVisibility() {
    this.element.setAttribute("aria-hidden", `${!this.isVisible}`);
  }

  protected insertChildren(children: HTMLElement) {
    this.content.appendChild(children);
  }
}
