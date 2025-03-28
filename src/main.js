import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Creates a <link> element to import a stylesheet into the Shadow DOM.
 *
 * @param {string} href - The path to the CSS file to be imported.
 * @returns {HTMLLinkElement} - The <link> element configured with the specified href.
 */
export function createStylesheet(href) {
  const link = document.createElement("link"); // Create a <link> element
  link.rel = "stylesheet"; // Set the relationship type to "stylesheet"
  link.href = href; // Assign the provided CSS file path to the href attribute
  return link;
}

/**
 * Creates a <script> element with the specified source URL.
 * The script is set to be a module, deferred, and has its source URL assigned.
 *
 * @param {string} src - The source URL of the script to be loaded.
 * @returns {HTMLScriptElement} - The created <script> element.
 */
export function createScript(src) {
  const script = document.createElement("script"); // Create the <script> element
  script.type = "module";// Set the script type to "module" to support ES6 modules
  script.src = src; // Set the script source to the provided URL
  script.defer = true;  // Set the "defer" attribute to ensure the script is executed after the document is parsed

  return script;
}

// Wait until the 'navbar-layout' component is fully defined
customElements.whenDefined("navbar-layout").then(() => {
  // After the 'navbar-layout' component is defined, select the first 'navbar-layout' in the DOM
  const navBar = document
    .querySelector("navbar-layout") // Selects the 'navbar-layout' component
    ?.shadowRoot?.querySelector("nav"); // Accesses the Shadow DOM and selects the <nav> element inside it

  // Check if 'navBar' was found before trying to manipulate the class
  if (navBar) {
    // Add an event listener to listen for the 'toggle-navbar' event
    document.addEventListener("toggle-navbar", () => {
      // Every time the 'toggle-navbar' event is triggered, toggle the 'active' class on <nav>
      navBar.classList.toggle("active");
    });
  } else {
    console.error("Element <nav> not found inside the Shadow DOM.");
  }
});
