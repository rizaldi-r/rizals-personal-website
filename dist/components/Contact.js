import { BaseComponent } from './_common/BaseComponent.js';
class AppContact extends BaseComponent {
    constructor() {
        super(...arguments);
        this.socials = [
            { title: "Email", link: "mailto:m.rizaldir)outlook.com" },
            { title: "Github", link: "https://github.com/rizaldi-r" },
            { title: "Linkedin", link: "https://www.linkedin.com/in/rizaldi-ramli/" },
            { title: "X (Twitter)", link: "https://x.com/rizaldirl" }
            // { title: "Instagram", link: "https://www.instagram.com/" },
        ];
    }
    template() {
        return /*html*/ `
		<link rel="stylesheet" href="src/styles/Contact.css" />
		<link rel="stylesheet" href="src/styles/_common/utility.css" />
		
		<section id="contact" class="contact section">
			<div class="contact-container">
				<h2 class="contact-title sub-heading">
					Catch my Socials <span class="mobile-break">*</span>
				</h2>
				
				<div class="contact-socials">
					${this.socials.map(social => /*html*/ `
						<p class="hover-right">
							<a target="_blank" href="${social.link}">
								> ${social.title}
							</a>
						</p>
					`).join('')}
				</div>
			</div>

			<div class="contact-devider">
				<span class="loop-dot">
					):):):):):):):):):):):):):):):):):):):):):):):):):):):):):
				</span>
			</div>

			<footer class="footer">
				<p>&copy; Rizaldi Ramli 2025</p>
			</footer>
		</section>
		`;
    }
    addEventListeners() { }
}
customElements.define('app-contact', AppContact);
