import { createStylesheet } from "../../main.js";

customElements.define(
  "main-title",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.titleText = this.getAttribute("title-text") || "lorem";

      this.spanClass = this.getAttribute("span-class") || "";
      this.spanText = this.getAttribute("span-text") || "lorem";

      this.render();
    }

    createMainTitleItem() {
      const mainTitle = document.createElement("h1");
      mainTitle.textContent = `${this.titleText}`;

      const titleSpan = document.createElement("span");
      if (this.spanClass) titleSpan.classList.add(`${this.spanClass}`);
      titleSpan.textContent = `${this.spanText}`;

      mainTitle.appendChild(titleSpan);

      return mainTitle;
    }

    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(createStylesheet("/src/css/main-style.css"));
      shadow.appendChild(createStylesheet("/src/css/main-title-style.css"));

      shadow.appendChild(this.createMainTitleItem());
    }
  }
);
