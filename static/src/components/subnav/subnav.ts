export class Subnav {
  protected element: HTMLElement;
  protected links: NodeListOf<HTMLAnchorElement>;
  protected dropdown: HTMLSelectElement;

  constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.links = element.querySelectorAll("a");
      this.init();
    }
  }

  protected init() {
    this.createDropdown();
  }

  protected createDropdown() {
    const dropdown = document.createElement("SELECT") as HTMLSelectElement;
    const placeholderOption = document.createElement("option") as HTMLOptionElement;

    dropdown.className = "subnav__dropdown";
    dropdown.setAttribute("aria-label", "Navigate to a page in this section");

    placeholderOption.textContent = "Navigation";

    dropdown.appendChild(placeholderOption);

    for (let i = 0; i < this.links.length; i++) {
      const option = document.createElement("OPTION") as HTMLOptionElement;
      option.setAttribute("value", this.links[i].href);
      option.textContent = this.links[i].textContent;
      dropdown.appendChild(option);
    }

    dropdown.addEventListener("change", (event) => {
      const target = event.target as HTMLSelectElement;
      if (target.value) {
        window.location.href = target.value;
      }
    });

    this.element.appendChild(dropdown);

    this.dropdown = dropdown;
  }
}

export default function initSubnav() {
  const subnav = document.querySelectorAll(".subnav") as NodeListOf<HTMLElement>;

  for (let i = 0; i < subnav.length; i++) {
    new Subnav(subnav[i]);
  }
}
