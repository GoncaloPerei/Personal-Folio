import { createStylesheet } from "../../main.js";

/**
 * Defines a custom HTML element <main-title> that dynamically renders
 * a styled title with an optional span element.
 */
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

    /**
     * Creates and returns an <h1> element representing the main title.
     * The title includes an optional <span> for additional text.
     *
     * @returns {HTMLElement} - The constructed title element.
     */
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
