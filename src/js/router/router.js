class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
        window.addEventListener('popstate', () => this._loadRoute());
    }

    navigate(path) {
        history.pushState({}, "", path);
        this._loadRoute();
    }

    _loadRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes["/404"];
        document.querySelector("router-view").setAttribute("component", route);
    }

    _loadInitialRoute() {
        this._loadRoute();
    }
}

const routes = {
    "/": "home-view",
    "/about": "about-page",
    "/contact": "contact-page",
    "/404": "not-found",
};

const router = new Router(routes);
