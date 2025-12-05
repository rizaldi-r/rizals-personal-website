import { BaseComponent } from './_common/BaseComponent.js';

class AppNavbar extends BaseComponent {

	template(): string {
		return /*html*/`
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
				<div class="scrollbar">
					<div class="scrollbar-thumb"></div>
				</div>
			</nav>
			`;
	}


	addEventListeners(): void {
		const burger = this.shadowRoot.querySelector('.navbar-burger');
		const menu = this.shadowRoot.querySelector('.navbar-menu') as HTMLElement;
		const scrollbarThumb = this.shadowRoot.querySelector('.scrollbar-thumb') as HTMLElement;

		if (burger && menu) {
			burger.addEventListener('click', () => {
				const isVisible = menu.style.display === 'block';

				if (isVisible) menu.style.display = 'none';
				else menu.style.display = 'block';
			});
		}

		if (scrollbarThumb) {
			const updateScrollbar = () => {
				const doc = document.documentElement;
				const scrollTop = window.scrollY || doc.scrollTop;
				const docHeight = doc.scrollHeight;
				const winHeight = doc.clientHeight;

				const heightPercent = (winHeight / docHeight) * 100;
				const topPercent = (scrollTop / docHeight) * 100;

				scrollbarThumb.style.height = `${heightPercent}%`;
				scrollbarThumb.style.transform = `translateY(${topPercent}vh)`;
				// Note: using vh relative to viewport, or use % if parent is fixed height

				// Best approach for fixed container:
				scrollbarThumb.style.top = `${topPercent}%`;
			};

			window.addEventListener('scroll', updateScrollbar);
			window.addEventListener('resize', updateScrollbar);
			// Call once immediately to set initial state
			updateScrollbar();
		}
	}
}

customElements.define('app-navbar', AppNavbar);