import { BaseComponent } from './BaseComponent.js';

class AppHome extends BaseComponent {

	template(): string {
		return /*html*/`
			<link rel="stylesheet" href="src/styles/Home.css" />
			<section id="home" class="home">
				<div class="home-title">
					<h1>Rizaldi R.</h1>
				</div>

				<h2 class="home-tagline">Aspiring Fullstack Developer</h2>
				<div class="home-loading-container">
					<span class="home-loading-bit">>></span>
					<span class="home-loading-bit">>></span>
					<span class="home-loading-bit">>></span>
					<p class="home-loading">[~~~~~~~~~~~~~~]</p>
				</div>

				<div class="home-text">
					<p>
						> I create stuff through code.
					</p>
					<p>> <span class="cursor-anim">██</span></p>
				</div>
			</section>
			`;
	}

	addEventListeners(): void {}
}

customElements.define('app-home', AppHome);