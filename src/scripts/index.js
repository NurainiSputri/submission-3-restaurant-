import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/component/nav-bar';
import './views/component/hero';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});