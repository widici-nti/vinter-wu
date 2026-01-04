class AdUnit extends HTMLElement {
    constructor() {
        super();

        const AD_PATHS = [
            "../img/ads/crib-black.png",
            "../img/ads/crib-pink.png",
            "../img/ads/rust-lang.png",
            "../img/ads/c-lang.png",
            "../img/ads/crafting-interpreters.png",
        ];

        this.innerHTML = `
            <div class="ad-title">
                <h2>Advertisement</h2>
            </div>
            <div class="ad-img"></div>
        `;

        const path = AD_PATHS[Math.floor(Math.random() * AD_PATHS.length)];

        this.querySelector(".ad-img").style.backgroundImage = `url("${path}")`;
    }
}

customElements.define("ad-unit", AdUnit);
