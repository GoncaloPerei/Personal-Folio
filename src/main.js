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
  return link; // Return the <link> element to be appended to the Shadow DOM
}

export function createScript(src) {
  const script = document.createElement("script");
  script.type = "module";
  script.src = src;
  script.defer = true;

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
