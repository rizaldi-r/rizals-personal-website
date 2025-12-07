import { BaseComponent } from './_common/BaseComponent.js';
import './ProjectItem.js';
class AppProject extends BaseComponent {
    constructor() {
        super(...arguments);
        this.projects = [
            {
                title: "Campjam",
                link: "https://campjam.vercel.app/",
                imgSrc: "./src/assets/campjam.png",
                description: "Campjam is a comprehensive learning management system, designed to provide a seamless educational experience for students, instructors, and administrators.",
                techStack: "Next.js, Nest.js, Typescript, Tailwind"
            },
            {
                title: "Revobank Backend",
                link: "https://github.com/rizaldi-r/revobank",
                imgSrc: "./src/assets/revobank.png",
                techStack: "Nest.js, Typescript",
                zoomScale: "2.3",
            },
            {
                title: "Aerocave",
                link: "https://aerocave.vercel.app/",
                imgSrc: "./src/assets/aerocove.png",
                techStack: "Next.js, Typescript, Tailwind",
                zoomScale: "2.4",
            },
            {
                title: "Revofun",
                link: "https://revofun-rz.netlify.app/",
                imgSrc: "./src/assets/revofun.png",
                techStack: "HTML, CSS, Typescript",
            }
        ];
    }
    template() {
        const projectItems = this.projects.map(project => /*html*/ `
			<app-project-item 
					title="${project.title}"
					link="${project.link}"
					img-src="${project.imgSrc}"
					tech-stack="${project.techStack}"
					${project.zoomScale ? `zoom-scale="${project.zoomScale}"` : ''}
			></app-project-item>
		`).join('');
        return /*html*/ `
		<link rel="stylesheet" href="src/styles/Project.css" />
		<link rel="stylesheet" href="src/styles/_common/utility.css" />
		<section id="project" class="project section">
			<h2 class="sub-heading">Things I've Made...</h2>

			<ul class="project-list-mobile">
				${projectItems}
			</ul>
		</section>
		`;
    }
    addEventListeners() { }
}
customElements.define('app-project', AppProject);
