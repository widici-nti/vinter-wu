class AdUnit extends HTMLElement {
    constructor() {
        super();

        const AD_PATHS = [
            "../img/ads/crib-black.webp",
            "../img/ads/crib-pink.webp",
            "../img/ads/rust-lang.webp",
            "../img/ads/c-lang.webp",
            "../img/ads/crafting-interpreters.webp",
        ];

        this.innerHTML = `
            <div class="ad-title">
                <h2>Advertisement</h2>
            </div>
            <a href="https://github.com/widici-nti/vinter-wu">
                <div class="ad-img"></div>
            </a>
        `;

        const path = AD_PATHS[Math.floor(Math.random() * AD_PATHS.length)];

        this.querySelector(".ad-img").style.backgroundImage = `url("${path}")`;
    }
}

customElements.define("ad-unit", AdUnit);
