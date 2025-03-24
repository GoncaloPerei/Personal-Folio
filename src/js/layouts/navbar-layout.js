import { createStylesheet } from "../../main.js";

customElements.define(
  "navbar-layout",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.render();
    }

    /**
     * Creates and returns a <nav> element representing the navigation bar.
     * It includes a logo, a list of navigation links, and a header layout component.
     * The links are dynamically generated from an array of objects.
     * The "menu" item is prepended at the start of the navigation list.
     *
     * @returns {HTMLElement} - The constructed navbar element.
     */
    createNav() {
      // Creating the main navbar container
      const navBar = document.createElement("nav");

      // Creating a div container for the main content inside the navbar
      const mainContainer = document.createElement("div");
      mainContainer.classList.add("sc-nav-main");

      // Creating a div to contain the list of navigation items
      const listContainer = document.createElement("div");
      listContainer.classList.add("sc-nav-list");

      // Creating and setting the logo image
      const logo = document.createElement("img");
      logo.src = "/src/assets/images/gp_logo.webp";
      logo.alt = "Goncalo Logo"; // Alternative text for accessibility

      // Creating an unordered list (ul) for the navigation items
      const navList = document.createElement("ul");

      // Creating a menu item (e.g., a "menu" label) to be prepended to the navigation list
      const menuSpan = document.createElement("span");
      menuSpan.textContent = "menu"; // Text content of the menu item

      // Creating a <slot> element to allow dynamically inserted list items
      const slot = document.createElement("slot");
      slot.name = "list-items"; // Assigning a slot name for custom content insertion

      // Creating a custom header-layout element (another custom component)
      const headerLayout = document.createElement("header-layout");
      headerLayout.setAttribute("header-color", "#FFF"); // Setting the header color
      headerLayout.setAttribute("icon-ref", "x-circle-fill"); // Setting the icon reference for the header

      // Appending the menu label and slot for list items to the unordered list
      navList.append(menuSpan, slot);

      // Appending the logo and navigation list to the list container
      listContainer.append(logo, navList);

      // Appending the list container to the main container
      mainContainer.append(listContainer);

      // Appending the main container and the header layout to the navbar
      navBar.append(mainContainer, headerLayout);

      // Returning the complete navbar structure
      return navBar;
    }

    // Function to render the content inside the Shadow DOM
    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(
        createStylesheet(
          "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        )
      );

      shadow.appendChild(createStylesheet("/src/css/main-style.css"));
      shadow.appendChild(createStylesheet("/src/css/navbar-style.css"));

      shadow.appendChild(this.createNav());
    }
  }
);
