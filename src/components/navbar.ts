import { BaseComponent } from './BaseComponent.js';

class AppNavbar extends BaseComponent {

	template(): string {
		return /*html*/`
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

	addEventListeners(): void {
		const toggle = this.shadowRoot.getElementById('menu-toggler') as HTMLInputElement | null;
		const menu = this.shadowRoot.querySelector('.navbar-menu') as HTMLElement | null;

		if (toggle && menu) {
			toggle.addEventListener('change', (e: Event) => {
				const target = e.target as HTMLInputElement;
				if (target.checked) {
					menu.style.display = 'block';
				} else {
					menu.style.display = '';
				}
			});
		}
	}
}

customElements.define('app-navbar', AppNavbar);