import { createStylesheet, createScript } from "../../main.js";

/**
 * Defines a custom HTML element <home-view> that represents the home page view.
 * It dynamically creates and renders the structure using the Shadow DOM.
 */
customElements.define(
  "home-view",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.render();
    }

    /**
     * Creates and returns the left-side section of the home view.
     * It includes a title and an image.
     *
     * @returns {HTMLElement} - The left-side div element.
     */
    _createDivLeft() {
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("dv-main");

      const mainTitle = document.createElement("main-title");
      mainTitle.setAttribute("title-text", "software developer");
      mainTitle.setAttribute("span-text", "- full-stack developer");

      const mainImg = document.createElement("img");
      mainImg.src = "src/assets/images/goncalo_img.webp";
      mainImg.alt = "Goncalo Illustration";
      mainImg.loading = "lazy";

      mainDiv.append(mainTitle, mainImg);

      return mainDiv;
    }

    /**
     * Creates and returns the right-side section of the home view.
     * It includes an arrow, a title, and social media links.
     *
     * @returns {HTMLElement} - The right-side div element.
     */
    _createDivRight() {
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("dv-main", "right");

      const arrow = document.createElement("div");
      arrow.classList.add("arrow");

      const mainTitle = document.createElement("main-title");
      mainTitle.setAttribute("title-text", "gonçalo pereira");
      mainTitle.setAttribute("span-class", "right");
      mainTitle.setAttribute("span-text", "fellow nerd -");

      const scSocialBanner = document.createElement("div");
      scSocialBanner.classList.add("sc-social-banners");

      // Define social media links
      const links = [
        {
          href: "https://www.linkedin.com/in/goncalopereiraa/",
          iconClass: "bi bi-linkedin",
          text: "linkedin",
        },
        {
          href: "https://github.com/GoncaloPerei",
          iconClass: "bi bi-github",
          text: "github",
        },
        {
          href: "mailto:business.goncalopereira@gmail.com",
          iconClass: "bi bi-envelope-fill",
          text: "email",
        },
      ];

      // Create and append social media links
      links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.href;
        a.target = "_blank";

        const icon = document.createElement("i");
        icon.className = link.iconClass;

        const span = document.createElement("span");
        span.textContent = link.text;

        a.appendChild(icon);
        a.appendChild(span);
        scSocialBanner.appendChild(a);
      });

      mainDiv.append(arrow, mainTitle, scSocialBanner);

      return mainDiv;
    }

    /**
     * Creates and returns the complete home view layout.
     * It contains both left and right sections.
     *
     * @returns {HTMLElement} - The home view wrapper element.
     */
    createHomeView() {
      const wrapper = document.createElement("div");
      wrapper.classList.add("dv-wrapper");

      const mainDivLeft = this._createDivLeft();
      const mainDivRight = this._createDivRight();

      wrapper.append(mainDivLeft, mainDivRight);

      return wrapper;
    }

    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(
        createStylesheet(
          "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        )
      );

      shadow.appendChild(createStylesheet("/src/css/main-style.css"));

      shadow.appendChild(createStylesheet("/src/css/header-style.css"));

      shadow.append(
        createScript("/src/js/components/sc-main-title-component.js"),
        createScript("/src/js/layouts/header-layout.js")
      );

      shadow.appendChild(this.createHomeView());
    }
  }
);
