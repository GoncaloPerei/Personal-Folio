import { createStylesheet } from "../../main.js";

/**
 * Defines a custom HTML element <nav-li> that represents a navigation list item.
 * It dynamically creates an <li> element containing an anchor (<a>) element
 * with attributes set based on the component's properties.
 */
customElements.define(
  "nav-li",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.listId = this.getAttribute("id") || "";
      this.listClass = this.getAttribute("class") || "";
      this.linkHREF = this.getAttribute("href") || "#";
      this.linkTarget = this.getAttribute("target") || "_blank";
      this.linkRel = this.getAttribute("rel") || "noopener noreferrer";
      this.linkText = this.getAttribute("text") || "lorem";

      this.render();
    }

    /**
     * Creates and returns an <li> element representing a navigation list item.
     * It includes an <a> (anchor) element with attributes dynamically set
     * from the component's attributes.
     *
     * @returns {HTMLElement} - The constructed list item element.
     */
    createListItem() {
      const listItem = document.createElement("li");

      // If the class attribute exists, add it to the list item
      if (this.listClass) listItem.classList.add(`${this.listClass}`);

      // Assign an ID to the list item
      listItem.id = `nav-sel-list-${this.listId}`;

      // Create a link element (<a>)
      const itemLink = document.createElement("a");
      itemLink.href = `${this.linkHREF}`; // Set the href attribute
      itemLink.target = `${this.linkTarget}`; // Set the target attribute
      itemLink.rel = `${this.linkRel}`; // Set the rel attribute
      itemLink.textContent = `${this.linkText}`; // Set the link text

      // Append the link inside the list item
      listItem.appendChild(itemLink);

      return listItem;
    }

    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(createStylesheet("/src/css/main-style.css"));
      shadow.appendChild(createStylesheet("/src/css/nav-li-style.css"));

      shadow.appendChild(this.createListItem());
    }
  }
);
