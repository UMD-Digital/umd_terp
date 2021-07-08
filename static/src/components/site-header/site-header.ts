import * as _debounce from "lodash.debounce";

export class SiteHeader {
    protected element: HTMLElement;
    protected navToggle: HTMLElement;
    protected nav: HTMLElement;
    protected navExpanded: boolean = false;
    protected parentItems: NodeListOf<HTMLAnchorElement>;
    protected dropdowns: SiteHeaderDropdown[] = [];
    protected activeDropdown: SiteHeaderDropdown;

    constructor(element: HTMLElement) {
        if (element) {
            this.element = element;
            this.navToggle = this.element.querySelector(".site-header__nav-toggle");
            this.nav = this.element.querySelector(".site-header__nav");
            this.parentItems = this.element.querySelectorAll(".site-header__nav > ul > li") as NodeListOf<HTMLAnchorElement>;

            this.init();
        }
    }

    protected init() {
        this.initDropdowns();
        this.convertNavToggleToButton();
        this.handleResize();
        this.handleEsc();
        this.handleTabbing();
        this.handleNavToggleClick();
    }

    protected initDropdowns() {
        for (let i = 0; i < this.parentItems.length; i++) {
            const item = this.parentItems[i];

            // Only create dropdown if there is a child list
            if (!!item.querySelector("a") && !!item.querySelector("ul")) {
                const dropdown = new SiteHeaderDropdown(item, i);

                dropdown.on("open", (target: SiteHeaderDropdown) => {
                    if (!!this.activeDropdown) {
                        this.activeDropdown.resetState();
                    }
                    this.activeDropdown = target;
                });

                dropdown.on("close", (target: SiteHeaderDropdown) => {
                    this.activeDropdown = null;
                });

                this.dropdowns.push(dropdown);
            }
        }
    }

    protected convertNavToggleToButton() {
        const button = document.createElement("BUTTON") as HTMLButtonElement;
        button.id = this.navToggle.id;
        button.className = this.navToggle.className;
        button.innerHTML = this.navToggle.innerHTML;
        button.setAttribute("aria-label", this.navToggle.getAttribute("aria-label"));
        button.setAttribute("aria-controls", this.navToggle.getAttribute("aria-controls"));
        this.navToggle.parentElement.replaceChild(button, this.navToggle);
        this.navToggle = button;
    }

    protected handleResize() {
        const resize = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                this.nav.removeAttribute("aria-hidden");
            } else {
                this.toggleNavVisibility();
            }
        };
        window.addEventListener("resize", _debounce(resize, 100));
        resize();
    }

    protected handleEsc() {
        this.element.addEventListener("keydown", (event) => {
            const key = event.key || event.keyCode;
            if (key === "Escape" || key === "Esc" || key === 27) {
                if (this.navExpanded && this.element.contains(event.target as HTMLElement)) {
                    this.navExpanded = false;
                    this.toggleNavVisibility();
                    this.navToggle.focus();
                }
            }
        });
    }

    protected handleTabbing() {
        window.addEventListener("keyup", (event) => {
            const key = event.key || event.keyCode;
            if (key === "Tab" || key === 9) {
                if (this.navExpanded && !this.element.contains(event.target as HTMLElement)) {
                    this.navExpanded = false;
                    this.toggleNavVisibility();
                }
            }
        });
    }

    protected handleNavToggleClick() {
        let clickedViaKeyboard = false;
        const firstFocusableChild = this.nav.querySelector(`a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])`) as HTMLElement;

        // Set flag used in click handler to determine if click was handled via keyboard
        this.navToggle.addEventListener("keydown", (event) => {
            if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
                clickedViaKeyboard = true;
            }
        });

        this.navToggle.addEventListener("click", () => {
            this.navExpanded = !this.navExpanded;
            this.toggleNavVisibility();

            if (clickedViaKeyboard && this.navExpanded && !!firstFocusableChild) {
                setTimeout(() => {
                    firstFocusableChild.focus();
                }, 50);
            }

            // Reset state for subsequent click events
            clickedViaKeyboard = false;
        });
    }

    protected toggleNavVisibility() {
        this.navToggle.setAttribute("aria-expanded", `${this.navExpanded}`);
        this.nav.setAttribute("aria-hidden", `${!this.navExpanded}`);
        document.body.classList[this.navExpanded ? "add" : "remove"]("offcanvas-open");
    }
}

export class SiteHeaderDropdown {
    protected element: HTMLElement;
    protected toggleId: string;
    protected parentLink: HTMLAnchorElement;
    protected toggle: HTMLButtonElement;
    protected list: HTMLUListElement;
    protected childLinks: NodeListOf<HTMLAnchorElement>;
    protected expanded: boolean = false;
    protected events: any;

    constructor(element: HTMLElement, index: number) {
        if (element) {
            this.element = element;
            this.toggleId = `site-header-nav-dropdown-toggle-${index}`;
            this.parentLink = element.querySelector("a");
            this.list = element.querySelector("ul");
            this.childLinks = this.list.querySelectorAll("a");
            this.events = {
                open: [],
                close: []
            };

            this.init();
        }
    }

    protected init() {
        this.createToggle();
        this.handleToggleClick();
        this.handleEsc();
        this.handleTabbing();
        this.handleArrowDown();
        this.handleArrowUp();
        this.handleClickOutside();
        this.toggleVisibility();
        this.handleCheckOverlayHeight();
    }

    protected createToggle() {
        const button = document.createElement("BUTTON") as HTMLButtonElement;
        button.className = "site-header__nav-dropdown-toggle";
        button.setAttribute("id", this.toggleId);
        button.setAttribute("aria-haspopup", "true");
        button.setAttribute("aria-label", `View child menu items for ${this.parentLink.innerText}`);
        this.element.insertBefore(button, this.list);
        this.toggle = button;
        this.list.setAttribute("aria-labelledby", this.toggleId);
    }

    protected handleToggleClick() {
        let clickedViaKeyboard = false;
        const firstLink = this.list.querySelector("a") as HTMLAnchorElement;

        // Set flag used in click handler to determine if click was handled via keyboard
        this.toggle.addEventListener("keydown", (event) => {
            if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
                clickedViaKeyboard = true;
            }
        });

        this.toggle.addEventListener("click", () => {
            this.expanded = !this.expanded;
            this.toggleVisibility();

            if (clickedViaKeyboard && this.expanded && !!firstLink) {
                setTimeout(() => {
                    firstLink.focus();
                }, 50);
            }

            // Reset state for subsequent click events
            clickedViaKeyboard = false;
        });
    }

    protected handleEsc() {
        this.element.addEventListener("keydown", (event) => {
            const key = event.key || event.keyCode;
            if (key === "Escape" || key === "Esc" || key === 27) {
                if (this.expanded && this.element.contains(event.target as HTMLElement)) {
                    event.stopPropagation();
                    this.expanded = false;
                    this.toggleVisibility();
                    this.toggle.focus();
                }
            }
        });
    }

    protected handleTabbing() {
        window.addEventListener("keyup", (event) => {
            const key = event.key || event.keyCode;
            if (key === "Tab" || key === 9) {
                if (this.expanded && !this.element.contains(event.target as HTMLElement)) {
                    this.expanded = false;
                    this.toggleVisibility();
                }
            }
        });
    }

    protected handleArrowDown() {
        window.addEventListener("keyup", (event) => {
            const key = event.key || event.keyCode;
            if (key === "ArrowDown" || key === 40) {
                const parent = ( <HTMLElement>event.target ).parentElement;
                if (parent) {
                    const nextElement = parent.nextElementSibling;
                    if (nextElement) {
                        const innerElement = nextElement.querySelector('a') as HTMLElement;
                        if (this.expanded && this.element.contains(innerElement)) {
                            innerElement.focus();
                        }
                    }
                }
            }
        });
    }

    protected handleArrowUp() {
        window.addEventListener("keyup", (event) => {
            const key = event.key || event.keyCode;
            if (key === "ArrowUp" || key === 38) {
                const parent = ( <HTMLElement>event.target ).parentElement;
                if (parent) {
                    const previousElement = parent.previousElementSibling;
                    if (previousElement) {
                        const innerElement = previousElement.querySelector('a') as HTMLElement;
                        if (this.expanded && this.element.contains(innerElement)) {
                            innerElement.focus();
                        }
                    }
                }
            }
        });
    }

    protected handleClickOutside() {
        window.addEventListener("click", (event) => {
            if (this.expanded && !this.element.contains(event.target as HTMLElement)) {
                this.expanded = false;
                this.toggleVisibility();
            }
        });
    }

    protected toggleVisibility() {
        this.toggle.setAttribute("aria-expanded", `${this.expanded}`);
        this.list.setAttribute("aria-hidden", `${!this.expanded}`);
        this.list.style.height = this.expanded ? `${this.list.scrollHeight}px` : null;
        const bodyElement = document.body;
        for (let i = 0; i < this.childLinks.length; i++) {
            this.childLinks[i].setAttribute("tabindex", this.expanded ? "0" : "-1");
        }
        if (this.expanded) {
            bodyElement.style.overflow = 'hidden';
            this.events.open.forEach(handler => {
                handler(this);
            });
        } else {
            bodyElement.style.overflow = 'auto';
            this.events.close.forEach(handler => {
                handler(this);
            });
        }
    }

    protected handleCheckOverlayHeight () {
        const nestedUl = this.element.querySelector('ul') as HTMLElement;
        const nestedUlToTop = nestedUl.getBoundingClientRect().top;

        if (window.innerWidth > 1023) {
            if (
                nestedUl.offsetHeight + nestedUlToTop >
                window.innerHeight - 20
            ) {
                nestedUl.style.overflowY = 'scroll';
            } else {
                nestedUl.style.overflowY = 'auto';
            }
        }
    }

    public resetState() {
        this.expanded = false;
        this.toggleVisibility();
    }

    public on(eventName: string, handler: Function) {
        if (this.events.hasOwnProperty(eventName)) {
            this.events[eventName].push(handler);
        } else {
            throw new Error("Invalid event name supplied.");
        }
    }
}

export default function initSiteHeader() {
    const header = document.querySelector(".site-header") as HTMLElement;
    new SiteHeader(header);
}
