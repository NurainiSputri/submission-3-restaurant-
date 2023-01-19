class Hero extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="container">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg">
                <img src="./images/heros/hero-image_1-large.jpg" alt="alt">
            </picture>
        </div>
        `;
    }
}

customElements.define('hero-bar', Hero);