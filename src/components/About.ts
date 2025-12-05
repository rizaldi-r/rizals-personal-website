import { BaseComponent } from './_common/BaseComponent.js';

class AppAbout extends BaseComponent {

	template(): string {
		return /*html*/`
		<link rel="stylesheet" href="src/styles/About.css" />
		<section id="about" class="about">
			<h2 class="about-title">Where it all began...</h2>
			<div class="about-text">
				<p>
					> I fell in love with tech by making games. but eventually expanded into the web. 
				</p>
				<p>
					> I'm still building cool stuff, just with less rigid physics and way more TypeScript shenanigans. 
				</p>
			</div>
		</section>
		`
	}

	addEventListeners(): void { }
}

customElements.define('app-about', AppAbout);