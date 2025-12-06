/**
 * The Base Component
 * Handles Shadow DOM, State, and Rendering.
 */
export class BaseComponent<S = Record<string, any>> extends HTMLElement {
    state: S;
    shadowRoot!: ShadowRoot; 

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = {} as S;
    }

    connectedCallback(): void {
        this.render();
        this.componentDidMount();
    }

    // lifecycle hook for children
    componentDidMount(): void {}

    setState(newState: Partial<S>): void {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    render(): void {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = /*html*/`
						<link rel="stylesheet" href="src/styles/_common/default.css" />
            ${this.template()}
        `;
        this.addEventListeners();
    }

    // default methods
    // styles(): string { return ''; }
    template(): string { return ''; }
    addEventListeners(): void {}
}