customElements.define(
  "header-layout",
  class extends HTMLElement {
    constructor() {
      super();

      // Attach a Shadow DOM to encapsulate styles and structure
      this.attachShadow({ mode: "open" });

      this.render(); // Call the render function to generate the component's content
    }

    /**
     * Creates a <link> element to import a stylesheet into the Shadow DOM.
     *
     * @param {string} href - The path to the CSS file to be imported.
     * @returns {HTMLLinkElement} - The <link> element configured with the specified href.
     */
    createStylesheet(href) {
      const link = document.createElement("link"); // Create a <link> element
      link.rel = "stylesheet"; // Set the relationship type to "stylesheet"
      link.href = href; // Assign the provided CSS file path to the href attribute
      return link; // Return the <link> element to be appended to the Shadow DOM
    }

    createHeader() {
      const header = document.createElement("header");

      // Left arrow decoration
      const arrowLeft = document.createElement("div");
      arrowLeft.classList.add("arrow");

      const icon = document.createElement("i");
      icon.classList.add("bi", "bi-hourglass");

      // Right arrow decoration
      const arrowRight = document.createElement("div");
      arrowRight.classList.add("arrow");

      header.append(arrowLeft, icon, arrowRight);

      return header;
    }

    /**
     * Renders the content of the footer component by appending stylesheets and the footer structure
     * to the Shadow DOM.
     */
    render() {
      const shadow = this.shadowRoot; // Get the Shadow DOM root to append elements to

      shadow.appendChild(
        this.createStylesheet(
          "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        )
      );

      // Append the main CSS stylesheet for the component
      shadow.appendChild(this.createStylesheet("/src/css/main.css"));

      shadow.appendChild(this.createStylesheet("/src/css/header-style.css"));

      shadow.appendChild(this.createHeader());
    }
  }
);
