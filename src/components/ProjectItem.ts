import { BaseComponent } from './_common/BaseComponent.js';

export class AppProjectItem extends BaseComponent {

	static get observedAttributes() {
		return ['title', 'link', 'img-src', 'tech-stack'];
	}

	template(): string {
		const title = this.getAttribute('title') || 'Project Title';
		const link = this.getAttribute('link') || '#';
		const imgSrc = this.getAttribute('img-src') || '';
		const techStack = this.getAttribute('tech-stack') || 'HTML, CSS, JS';

		return /*html*/`
				<link rel="stylesheet" href="src/styles/ProjectItem.css" />
        <li>
            <h3 class="hover-right">
							<a href="${link}" target="_blank">
								>> ${title}
							</a>
            </h3>
            <div class="project-desc">
							<div class="project-img img-zoom-container">
								<img src="${imgSrc}" alt="${title} screenshot">
							</div>
							<div class="project-text">
								<p>> Tech Stack:</p></br>
								<p>${techStack}</p>
							</div>
            </div>
        </li>
        `;
	}

	addEventListeners(): void { }
}

customElements.define('app-project-item', AppProjectItem);