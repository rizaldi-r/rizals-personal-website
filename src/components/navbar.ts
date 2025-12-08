import { BaseComponent } from './common/BaseComponent.js';

class AppNavbar extends BaseComponent {

	template(): string {
		return /*html*/`
			<link rel="stylesheet" href="src/styles/Navbar.css" />
      <nav>
				<div class="navbar">
					<ul class="navbar-menu" style="display:block;">
						<a href="#home"><li>> HOME</li></a>
						<a href="#about"><li>> ABOUT</li></a>
						<a href="#project"><li>> PROJECT</li></a>
						<a href="#contact"><li>> CONTACT</li></a>
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
				scrollbarThumb.style.top = `${topPercent}%`;
			};

			window.addEventListener('scroll', updateScrollbar);
			window.addEventListener('resize', updateScrollbar);
			updateScrollbar();
		}
	}
}

customElements.define('app-navbar', AppNavbar);