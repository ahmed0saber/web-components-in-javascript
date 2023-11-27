class NavLink extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <a
                ${this.getAttribute("active") === this.getAttribute("to") ? 'class="active"' : null}
                href="${this.getAttribute("to")}"
            >
                ${this.textContent}
            </a>
        `
    }
}

class NavbarComponent extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <header class="navbar">
                <span class="nav-logo">Web Components</span>
                <nav class="nav-links">
                    <nav-link active="${this.getAttribute("active")}" to="/">Home</nav-link>
                    <nav-link active="${this.getAttribute("active")}" to="/about.html">About</nav-link>
                </nav>
            </header>
        `
    }
}

class FooterComponent extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <footer class="footer">
                <p>Developed by Ahmed Saber</p>
            </footer>
        `
    }
}

customElements.define('my-navbar', NavbarComponent)
customElements.define('nav-link', NavLink)
customElements.define('my-footer', FooterComponent)
