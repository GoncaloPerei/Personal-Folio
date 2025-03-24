import { createStylesheet } from "../../main.js";

customElements.define(
  "header-layout",
  class extends HTMLElement {
    constructor() {
      super();

      // Attach a Shadow DOM to encapsulate styles and structure
      this.attachShadow({ mode: "open" });

      // Set the header color based on the attribute 'header-color' or default to black
      this.headerColor = this.getAttribute("header-color") || "#000";

      this.iconRef = this.getAttribute("icon-ref") || "hourglass";

      // Call the render function to generate and append the component's content
      this.render();
    }

    /**
     * Creates and returns a <div> element representing the header layout.
     * It includes the left and right arrow decorations and a central icon.
     *
     * @returns {HTMLElement} - The constructed header element.
     */
    createHeader() {
      // Create a div element for the header
      const header = document.createElement("div");
      header.classList.add("dv-header");

      // Create the left arrow decoration
      const arrowLeft = document.createElement("div");
      arrowLeft.classList.add("arrow");
      arrowLeft.style.backgroundColor = this.headerColor; // Set its color based on the header color

      // Create an icon element (hourglass icon from Bootstrap Icons)
      const icon = document.createElement("i");
      icon.classList.add("bi", `bi-${this.iconRef}`);
      icon.style.color = this.headerColor; // Set its color to match the header color
      icon.onclick = () => {
        this.changeNavBarState();
      };

      // Create the right arrow decoration
      const arrowRight = document.createElement("div");
      arrowRight.classList.add("arrow");
      arrowRight.style.backgroundColor = this.headerColor; // Set its color to match the header color

      // Append the left arrow, icon, and right arrow to the header
      header.append(arrowLeft, icon, arrowRight);

      return header;
    }

    changeNavBarState() {
      const event = new CustomEvent("toggle-navbar", {
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }

    /**
     * Renders the content of the header component by appending stylesheets
     * and the header structure to the Shadow DOM.
     */
    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(
        createStylesheet(
          "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        )
      );

      shadow.appendChild(createStylesheet("/src/css/main-style.css"));

      shadow.appendChild(createStylesheet("/src/css/header-style.css"));

      shadow.appendChild(this.createHeader());
    }
  }
);
