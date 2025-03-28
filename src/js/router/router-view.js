import { createScript } from "../../main.js";

customElements.define(
  "router-view",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ["component"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this._renderComponent(newValue);
    }

    async _renderComponent(componentName) {
      this.shadowRoot.appendChild(
        createScript(`src/js/views/${componentName}.js`)
      );
      this.shadowRoot.innerHTML = `<${componentName}></${componentName}>`;
    }
  }
);
