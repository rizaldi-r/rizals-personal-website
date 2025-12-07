import { BaseComponent } from './common/BaseComponent.js';
import './ProjectItem.js';

interface ProjectData {
	title: string;
	link: string;
	imgSrc: string;
	techStack: string;
	description: string;
	zoomScale?: string;
}

class AppProject extends BaseComponent {
	private projects: ProjectData[] = [
		{
			title: "Campjam",
			link: "https://campjam.vercel.app/",
			imgSrc: "./src/assets/campjam.png",
			description: "LMS built to solve the visual clutter of existing solutions for students, lecturer, and administrators.",
			techStack: "Next.js, Nest.js, Typescript, Tailwind"
		},
		{
			title: "Revobank API",
			link: "https://github.com/rizaldi-r/revobank",
			imgSrc: "./src/assets/revobank.png",
			techStack: "Nest.js, Typescript",
			description: "Banking API with custom user ownership guards and decorators to ensure secure data access while improving code modularity.",
			zoomScale: "2.3",
		},
		{
			title: "Aerocave",
			link: "https://aerocave.vercel.app/",
			imgSrc: "./src/assets/aerocove.png",
			techStack: "Next.js, Typescript, Tailwind",
			description: "An e-commerce platform designed with a unique visual identity inspired by the 'Frutiger Aero' aesthetic.",
			zoomScale: "2.4",
		},
		{
			title: "Revofun",
			link: "https://revofun-rz.netlify.app/",
			imgSrc: "./src/assets/revofun.png",
			description: "A browser-based gaming portal built with a custom component-based architecture without frontend frameworks.",
			techStack: "HTML, CSS, Typescript",
		}
	];
	private activeIndex: number = 0;

	template(): string {
		const projectItemsMobile = this.projects.map(project => /*html*/`
			<app-project-item 
					title="${project.title}"
					link="${project.link}"
					img-src="${project.imgSrc}"
					tech-stack="${project.techStack}"
					${project.zoomScale ? `zoom-scale="${project.zoomScale}"` : ''}
			></app-project-item>
		`).join('');

		const projectItemsDesktop = this.projects.map((p, index) => /*html*/`
			<li>
				<h3 class="project-title hover-right ${index === 0 ? 'active' : ''}" data-index="${index}">
					<a
						href="${p.link}"
						target="_blank">
						>> ${p.title}
					</a>
				</h3>
			</li>
		`).join('');

		const activeProject = this.projects[this.activeIndex];

		return /*html*/`
		<link rel="stylesheet" href="src/styles/Project.css" />
		<link rel="stylesheet" href="src/styles/common/utility.css" />
		<section id="project" class="project section">
			<h2 class="sub-heading">Things I've Made...</h2>

			<ul class="project-container-mobile">
				${projectItemsMobile}
			</ul>

			<!-- TODO: make new component for desktop -->
			<div class="project-container-desktop">
				<!-- List of Titles -->
				<ul class="project-list">
					${projectItemsDesktop}
				</ul>

				<!-- Devider -->
				<span class="project-devider">
				IIIIIIIIIIIIIIII
				</span>
					
				<!-- Preview Area -->
				<div class="project-preview" id="project-preview">
					${this.renderPreview(activeProject)}
				</div>
			</div>
		</section>

		`;
	}

	renderPreview(project: ProjectData): string {
		return /*html*/`
			<div class="preview-img-container img-zoom-container">
				<img class="preview-img" 
					src="${project.imgSrc}" 
					alt="${project.title} screenshot"
					style="transform-origin: top center;">
			</div>
			
			<div class="preview-desc">
				<p>
					> ${project.description}
				</p>
				</br></br>
				<p class="preview-tech-label">> Tech Stack:</p>
				<div class="preview-tech">
						${project.techStack}
				</div>
			</div>
	`;
	}

	addEventListeners(): void {
		const root = this.shadowRoot || this;
		const listItems = root.querySelectorAll('.project-title');
		const previewContainer = root.querySelector('#project-preview');

		listItems.forEach(item => {
			item.addEventListener('mouseenter', (e) => {
				const target = e.target as HTMLElement;
				const index = parseInt(target.dataset.index || '0');
				const project = this.projects[index];

				listItems.forEach(title => title.classList.remove('active'));
				target.classList.add('active');

				if (previewContainer) previewContainer.innerHTML = this.renderPreview(project);
			});
		});
	}
}

customElements.define('app-project', AppProject);