
export class SiteHeader {
    protected element: HTMLElement;
    protected offcanvas: HTMLElement;
    protected offcanvasToggle: HTMLElement;

    constructor(element: HTMLElement) {
        if (element) {
            this.element = element;
            this.offcanvas = this.element.querySelector(".navbar-collapse");
            this.offcanvasToggle = this.element.querySelector(".navbar-toggler");
            this.init();
        }
    }

    protected get navExpanded(): boolean {
        return this.offcanvas.classList.contains("show");
    }

    protected init() {
        this.handleEsc();
        this.handleTabbing();
    }

    protected handleEsc() {
        window.addEventListener("keydown", (event) => {
            const key = event.key || event.keyCode;
            if (key === "Escape" || key === "Esc" || key === 27) {
                if (this.navExpanded && this.element.contains(event.srcElement as HTMLElement)) {
                    this.offcanvasToggle.click();
                    this.offcanvasToggle.focus();
                }
            }
        });
    }

    protected handleTabbing() {
        window.addEventListener("keyup", (event) => {
            const key = event.key || event.keyCode;
            if (key === "Tab" || key === 9) {
                if (this.navExpanded && !this.element.contains(event.srcElement as HTMLElement)) {
                    this.offcanvasToggle.click();
                }
            }
        });
    }
}

export default function initSiteHeader() {
    const siteHeader = document.querySelector(".site-header") as HTMLElement;
    new SiteHeader(siteHeader);
}