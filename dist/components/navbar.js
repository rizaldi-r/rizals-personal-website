import { BaseComponent } from './BaseComponent.js';
class AppNavbar extends BaseComponent {
    template() {
        return /*html*/ `
			<link rel="stylesheet" href="src/styles/Navbar.css" />
      <nav>
				<div class="navbar">
					<ul class="navbar-menu">
						<li><a href="#home">> HOME</a></li>
						<li><a href="#about">> ABOUT</a></li>
						<li><a href="#project">> PROJECT</a></li>
						<li><a href="#contact">> CONTACT</a></li>
					</ul>
					<div class="navbar-container">
						<div class="navbar-logo"><span>zal.</span></div>
						<div class="navbar-bar"></div>
						<button class="navbar-burger" for="menu-toggler">▧</button>
					</div>
				</div>
				<div class="scrollbar"></div>
			</nav>
			`;
    }
    addEventListeners() {
        const burger = this.shadowRoot.querySelector('.navbar-burger');
        const menu = this.shadowRoot.querySelector('.navbar-menu');
        if (!burger || !menu)
            return;
        burger.addEventListener('click', () => {
            const isVisible = menu.style.display === 'block';
            if (isVisible)
                menu.style.display = 'none';
            else
                menu.style.display = 'block';
        });
    }
}
customElements.define('app-navbar', AppNavbar);
