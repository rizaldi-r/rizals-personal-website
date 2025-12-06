import { BaseComponent } from './_common/BaseComponent.js';

class AppProject extends BaseComponent {

	template(): string {
		return /*html*/`
		<link rel="stylesheet" href="src/styles/Project.css" />
		<link rel="stylesheet" href="src/styles/_common/utility.css" />
		<section id="project" class="project section">
			<h2 class="sub-heading">Things I've Made...</h2>

			<ul class="project-list">
				<!-- Sub-section: Project 1 -->
				<li>
					<h3 class="hover-right">
						<a href="https://campjam.vercel.app/" target="_blank">
							>> Campjam
						</a>
					</h3>
					<div class="project-desc">
						<div class="project-img img-zoom-container">
							<img src="./src/assets/campjam.png" alt="campjam screenshot">
						</div>
						<div class="project-text">
							<p>> Tech Stack:</p></br>
							<p>HTML, CSS, JS</p>
						</div>
					</div>
				</li>
			</ul>
		</section>
		`;
	}

	addEventListeners(): void { }
}

customElements.define('app-project', AppProject);