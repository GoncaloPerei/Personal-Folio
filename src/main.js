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
