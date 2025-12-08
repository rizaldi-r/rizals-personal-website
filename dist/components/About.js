import { BaseComponent } from './common/BaseComponent.js';
class AppAbout extends BaseComponent {
    template() {
        return /*html*/ `
		<link rel="stylesheet" href="src/styles/About.css" />
		<link rel="stylesheet" href="src/styles/common/utility.css" />
		<section id="about" class="about section">
			<h2 class="about-title sub-heading">Where it all began<span class="mobile-break">...</span>
			</h2>
			<div class="about-container">
				<div class="about-text">
					<p>
						> I fell in love with tech by making games. but eventually expanded into the web. 
					</p>
					<p>
						> I'm still building cool stuff, just with less rigid physics and way more TypeScript shenanigans.
					</p>
				</div>
				<div class="wave-container">
					<span class="wave-text">
						/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/
					</span>
					<span class="wave-text">
						/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/
					</span>
				</div>
			</div>
		</section>
		`;
    }
    addEventListeners() { }
}
customElements.define('app-about', AppAbout);
