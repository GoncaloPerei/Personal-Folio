class Router {
  constructor(routes) {
    // Store the provided routes
    this.routes = routes;

    // Load the initial route when the page loads
    this._loadInitialRoute();

    // Listen for browser back/forward navigation (popstate event)
    window.addEventListener("popstate", () => this._loadRoute());
  }

  /**
   * Navigates to the specified path by updating the browser's history state
   * and loading the corresponding route.
   *
   * @param {string} path - The path to navigate to.
   */
  navigate(path) {
    // Update the browser history without reloading the page
    history.pushState({}, "", path);

    // Load the new route
    this._loadRoute();
  }

  /**
   * Loads the current route based on the window location pathname.
   * If the route is not found, it defaults to the 404 page.
   */
  _loadRoute() {
    // Get the current path from the URL
    const path = window.location.pathname;

    // Find the corresponding route object, or default to the 404 page
    const route = this.routes.find((route) => route.path === path) || {
      path: "/404",
      name: "not-found",
    };

    // Update the "router-view" component with the new route
    document.querySelector("router-view").setAttribute("route", route.name);
  }

  /**
   * Loads the initial route when the Router instance is created.
   */
  _loadInitialRoute() {
    this._loadRoute();
  }
}

// Define an array of route objects with their paths and names
const routes = [
  { path: "/", name: "home-view" },
  { path: "/about", name: "about-page" },
  { path: "/contact", name: "contact-page" },
  { path: "/404", name: "not-found" },
];

// Create a new Router instance with the defined routes
const router = new Router(routes);
