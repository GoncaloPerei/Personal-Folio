import { createStylesheet } from "../../main.js";

/**
 * Defines a custom HTML element <footer-layout> that generates a structured footer.
 * It includes contact information, social media links, and a branding message.
 */
customElements.define(
  "footer-layout",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.phoneNumber = this.getAttribute("phone-number") || "+351999999999";
      this.contactEmail =
        this.getAttribute("contact-email") || "example@email.com";
      this.linkedinProfile =
        this.getAttribute("linkedin-profile") || "https://www.linkedin.com";
      this.githubProfile =
        this.getAttribute("github-profile") || "https://github.com";

      this.render();
    }

    /**
     * Creates and returns a <footer> element with structured content,
     * including contact information, social links, and a trademark message.
     *
     * @returns {HTMLElement} - The fully constructed footer element.
     */
    createFooter() {
      const footer = document.createElement("footer"); // Create the <footer> element

      // Main container for the footer content
      const mainContainer = document.createElement("div");
      mainContainer.classList.add("sc-footer-main");

      // Title and subtitle container
      const titleContainer = document.createElement("div");
      titleContainer.classList.add("footer-title-subtitle");

      const title = document.createElement("h1");
      title.textContent = "Gonçalo Pereira"; // Main title (name)

      const subtitle = document.createElement("h2");
      subtitle.textContent = "- Full-Stack Developer"; // Subtitle (role)

      titleContainer.append(title, subtitle); // Append title and subtitle

      // Socials section
      const socialsContainer = document.createElement("div");
      socialsContainer.classList.add("footer-socials");

      const socialsTitle = document.createElement("h1");
      socialsTitle.textContent = "Get in touch!"; // Socials section title
      socialsTitle.setAttribute("aria-label", "Contact Information"); // Accessibility improvement

      // Phone contact link
      const phoneLink = this.createSocialLink(
        `tel:${this.phoneNumber}`, // Tel link
        "bi-telephone-fill", // Bootstrap icon class
        `${this.phoneNumber}` // Displayed phone number
      );

      // Email contact link
      const emailLink = this.createSocialLink(
        `mailto:${this.contactEmail}`, // Mailto link
        "bi-envelope-fill", // Bootstrap icon class
        `${this.contactEmail}` // Displayed email
      );

      // Social media icons container
      const socialIconsContainer = document.createElement("div");
      socialIconsContainer.append(
        this.createIconLink(
          `${this.linkedinProfile}`, // LinkedIn profile link
          "bi-linkedin", // LinkedIn icon class
          "LinkedIn Page of Gonçalo Pereira" // ARIA label for accessibility
        ),
        this.createIconLink(
          `${this.githubProfile}`, // GitHub profile link
          "bi-github", // GitHub icon class
          "Github of Gonçalo Pereira" // ARIA label for accessibility
        )
      );

      // Append contact details and icons to the socials container
      socialsContainer.append(
        socialsTitle,
        phoneLink,
        emailLink,
        socialIconsContainer
      );

      // Append title and socials sections to the main container
      mainContainer.append(titleContainer, socialsContainer);

      // Trademark section
      const trademarkContainer = document.createElement("div");
      trademarkContainer.classList.add("sc-footer-trademark");

      // Left arrow decoration
      const arrowLeft = document.createElement("div");
      arrowLeft.classList.add("arrow");

      // Trademark text (quote or slogan)
      const trademarkText = document.createElement("p");
      trademarkText.textContent = "Be the same without being the same";

      // Right arrow decoration
      const arrowRight = document.createElement("div");
      arrowRight.classList.add("arrow");

      // Append elements to the trademark container
      trademarkContainer.append(arrowLeft, trademarkText, arrowRight);

      // Append the main content and trademark section to the footer
      footer.append(mainContainer, trademarkContainer);

      return footer; // Return the constructed footer element
    }

    /**
     * Creates a social link with an icon and text to be used for contact or social media.
     *
     * @param {string} href - The URL or link (e.g., "tel:", "mailto:", or a social profile link).
     * @param {string} iconClass - The class for the icon (using Bootstrap Icons or custom icons).
     * @param {string} text - The text to be displayed next to the icon (e.g., phone number, email, or social handle).
     * @returns {HTMLAnchorElement} - The fully constructed <a> element representing the social link.
     */
    createSocialLink(href, iconClass, text) {
      const link = document.createElement("a"); // Create a new <a> element (anchor link)
      link.href = href; // Set the href attribute (the destination of the link)
      link.classList.add("ft-social-banner"); // Add a custom class for styling
      link.target = "_blank"; // Open the link in a new tab

      // Create the icon element (<i>) and set its class to match the icon type
      const icon = document.createElement("i");
      icon.classList.add("bi", iconClass); // Add Bootstrap icon classes for the desired icon

      // Create a <span> element to hold the text and set the displayed text content
      const span = document.createElement("span");
      span.textContent = text; // Set the visible text next to the icon (e.g., phone number, email)

      // Append the icon and text to the link
      link.append(icon, span);

      return link; // Return the constructed <a> element representing the social link
    }

    /**
     * Creates an icon link with a given icon and ARIA label for accessibility.
     * This is typically used for social media or external profile links.
     *
     * @param {string} href - The URL or link (e.g., a social media profile or external site).
     * @param {string} iconClass - The class for the icon (using Bootstrap Icons or custom icons).
     * @param {string} ariaLabel - The ARIA label for accessibility (helps screen readers understand the link's purpose).
     * @returns {HTMLAnchorElement} - The constructed <a> element with an icon inside.
     */
    createIconLink(href, iconClass, ariaLabel) {
      const link = document.createElement("a"); // Create a new <a> element (anchor link)
      link.href = href; // Set the href attribute to the provided link URL
      link.target = "_blank"; // Open the link in a new tab
      link.setAttribute("aria-label", ariaLabel); // Set the ARIA label for accessibility (for screen readers)

      // Create the icon element (<i>) and set its class to match the icon type
      const icon = document.createElement("i");
      icon.classList.add("bi", iconClass); // Add Bootstrap icon classes for the desired icon

      // Append the icon to the link
      link.appendChild(icon);

      return link; // Return the constructed <a> element with the icon inside
    }

    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(
        createStylesheet(
          "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        )
      );

      shadow.appendChild(createStylesheet("/src/css/main-style.css"));

      shadow.appendChild(createStylesheet("/src/css/footer-style.css"));

      shadow.appendChild(this.createFooter());
    }
  }
);
