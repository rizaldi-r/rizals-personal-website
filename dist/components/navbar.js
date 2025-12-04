import { BaseComponent } from './BaseComponent.js';
class AppNavbar extends BaseComponent {
    template() {
        return /*html*/ `
			<link rel="stylesheet" href="src/styles/Navbar.css" />
      <nav class="navbar">
				<div class="navbar-logo">zal.</div>
				<div class="navbar-bar"></div>
				<button class="navbar-burger" for="menu-toggler">▧</button>
      </nav>
    `;
    }
    // <ul class="navbar-menu">
    //         <li class="hover-right"><a href="#home">> HOME</a></li>
    //         <li class="hover-right"><a href="#about">> ABOUT</a></li>
    //         <li class="hover-right"><a href="#project">> PROJECT</a></li>
    //         <li class="hover-right"><a href="#contact">> CONTACT</a></li>
    //       </ul>
    addEventListeners() {
        const toggle = this.shadowRoot.getElementById('menu-toggler');
        const menu = this.shadowRoot.querySelector('.navbar-menu');
        if (toggle && menu) {
            toggle.addEventListener('change', (e) => {
                const target = e.target;
                if (target.checked) {
                    menu.style.display = 'block';
                }
                else {
                    menu.style.display = '';
                }
            });
        }
    }
}
customElements.define('app-navbar', AppNavbar);
