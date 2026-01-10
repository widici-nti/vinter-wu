class SiteHeader extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <img src="img/icons/figure.webp" alt="Figure icon">
            <nav>
                <h1>
                    <a class="page-link" href="about.html">About</a>
                </h1>
                <h1>
                    <a class="page-link" href="index.html">Recipes</a>
                </h1>
                <h1>
                    <a class="page-link" href="contact.html">Contact</a>
                </h1>
            </nav>
            <img src="img/icons/hand.webp" alt="Hand icon">
        `;

        const links = this.querySelectorAll("nav a");
        const path = window.location.pathname.split("/").pop();

        links.forEach(link => {
            const href = link.getAttribute("href");
            if (href === path || (href === "index.html" && path === "")) {
                link.classList.add("active");
            }
        });
    }
}

customElements.define("site-header", SiteHeader);