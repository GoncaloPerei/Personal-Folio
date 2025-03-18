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

    createStylesheet(href) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      return link;
    }

    createFooter() {
      const footer = document.createElement("footer");

      const mainContainer = document.createElement("div");
      mainContainer.classList.add("sc-footer-main");

      const titleContainer = document.createElement("div");
      titleContainer.classList.add("footer-title-subtitle");

      const title = document.createElement("h1");
      title.textContent = "Gonçalo Pereira";

      const subtitle = document.createElement("h2");
      subtitle.textContent = "- Full-Stack Developer";

      titleContainer.append(title, subtitle);

      const socialsContainer = document.createElement("div");
      socialsContainer.classList.add("footer-socials");

      const socialsTitle = document.createElement("h1");
      socialsTitle.textContent = "Get in touch!";
      socialsTitle.setAttribute("aria-label", "Contact Information");

      const phoneLink = this.createSocialLink(
        `tel:${this.phoneNumber}`,
        "bi-telephone-fill",
        `${this.phoneNumber}`
      );

      const emailLink = this.createSocialLink(
        `mailto:${this.contactEmail}`,
        "bi-envelope-fill",
        `${this.contactEmail}`
      );

      const socialIconsContainer = document.createElement("div");
      socialIconsContainer.append(
        this.createIconLink(
          `${this.linkedinProfile}`,
          "bi-linkedin",
          "LinkedIn Page of Gonçalo Pereira"
        ),
        this.createIconLink(
          `${this.githubProfile}`,
          "bi-github",
          "Github of Gonçalo Pereira"
        )
      );

      socialsContainer.append(
        socialsTitle,
        phoneLink,
        emailLink,
        socialIconsContainer
      );

      mainContainer.append(titleContainer, socialsContainer);

      const trademarkContainer = document.createElement("div");
      trademarkContainer.classList.add("sc-footer-trademark");

      const arrowLeft = document.createElement("div");
      arrowLeft.classList.add("arrow");

      const trademarkText = document.createElement("p");
      trademarkText.textContent = "Be the same without being the same";

      const arrowRight = document.createElement("div");
      arrowRight.classList.add("arrow");

      trademarkContainer.append(arrowLeft, trademarkText, arrowRight);

      footer.append(mainContainer, trademarkContainer);

      return footer;
    }

    createSocialLink(href, iconClass, text) {
      const link = document.createElement("a");
      link.href = href;
      link.classList.add("ft-social-banner");
      link.target = "_blank";

      const icon = document.createElement("i");
      icon.classList.add("bi", iconClass);

      const span = document.createElement("span");
      span.textContent = text;

      link.append(icon, span);
      return link;
    }

    createIconLink(href, iconClass, ariaLabel) {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.setAttribute("aria-label", ariaLabel);

      const icon = document.createElement("i");
      icon.classList.add("bi", iconClass);

      link.appendChild(icon);
      return link;
    }

    render() {
      const shadow = this.shadowRoot;

      shadow.appendChild(
        this.createStylesheet(
          "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        )
      );

      shadow.appendChild(this.createStylesheet("/src/css/main.css"));

      shadow.appendChild(this.createStylesheet("/src/css/footer-style.css"));

      shadow.appendChild(this.createFooter());
    }
  }
);
