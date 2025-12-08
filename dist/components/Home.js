import { BaseComponent } from './common/BaseComponent.js';
class AppHome extends BaseComponent {
    template() {
        return /*html*/ `
		<link rel="stylesheet" href="src/styles/Home.css" />
		<link rel="stylesheet" href="src/styles/common/utility.css" />
		<section class="home">
			<div class="home-title">
				<h1>Rizaldi R.</h1>
			</div>

			<div class="home-container">
				<h2 class="home-tagline">Fullstack Dev/ </br>
				Game Dev</h2>
				<div class="home-loading-container-mobile">
					<p class="home-loading-bar">[~~~~~~~~~~]</p>
					<span class="home-loading-bit">>></span>
					<span class="home-loading-bit">>></span>
				</div>
				<div class="home-loading-container-desktop">
					<p class="home-loading-bar">[~~~~~~~~~~~~~~]</p>
					<span class="home-loading-bit">>></span>
					<span class="home-loading-bit">>></span>
					<span class="home-loading-bit">>></span>
				</div>

				<div class="home-text">
					<p>
						> I create stuff through </br> 
						code.
					</p>
					<p>> <span class="cursor-anim">██</span></p>
				</div>
			</div>
		</section>
		`;
    }
    addEventListeners() { }
}
customElements.define('app-home', AppHome);
