class NavBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1>WizzResto</h1>
        <button id="hamburgerButton" href="#">☰</button>
        <nav id="drawer">
        <ul class="nav__links">
            <li><a href="/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/nuraini-saputri-53030a203/">About Us</a></li>
        </ul>
        </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);