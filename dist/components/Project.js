import { BaseComponent } from './_common/BaseComponent.js';
import './ProjectItem.js';
class AppProject extends BaseComponent {
    template() {
        return /*html*/ `
		<link rel="stylesheet" href="src/styles/Project.css" />
		<link rel="stylesheet" href="src/styles/_common/utility.css" />
		<section id="project" class="project section">
			<h2 class="sub-heading">Things I've Made...</h2>

			<ul class="project-list">
				<!-- Sub-section: Project 1 -->
				<app-project-item 
					title="Campjam"
					link="https://campjam.vercel.app/"
					img-src="./src/assets/campjam.png"
					tech-stack="Next.js, Nest.js, Typescript, Tailwind"
				></app-project-item> 

				<app-project-item 
					title="Revobank Backend"
					link="#"
					img-src="..."
					tech-stack="Nest.js, Typescript"
				></app-project-item> 
			</ul>
		</section>
		`;
    }
    addEventListeners() { }
}
customElements.define('app-project', AppProject);
