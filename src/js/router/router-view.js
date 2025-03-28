import { createScript } from "../../main.js";

customElements.define(
  "router-view",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
    }

    /**
     * Specifies which attributes should be observed for changes.
     *
     * @returns {Array} - An array of attribute names to observe.
     */
    static get observedAttributes() {
      return ["route"];
    }

    /**
     * Called when an observed attribute changes. It triggers the rendering
     * of the corresponding component based on the new route value.
     *
     * @param {string} name - The name of the changed attribute.
     * @param {string} oldValue - The previous attribute value.
     * @param {string} newValue - The new attribute value.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      this._renderComponent(newValue);
    }

    /**
     * Dynamically loads and renders a component by adding a script for it
     * and then injecting the component tag into the Shadow DOM.
     *
     * @param {string} routeName - The name of the component to render.
     */
    async _renderComponent(routeName) {
      // Append the script to load the component
      this.shadowRoot.appendChild(createScript(`src/js/views/${routeName}.js`));
      // Render the component inside the Shadow DOM
      this.shadowRoot.innerHTML = `<${routeName}></${routeName}>`;
    }
  }
);
