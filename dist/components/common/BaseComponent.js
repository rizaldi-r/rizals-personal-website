/**
 * The Base Component
 * Handles Shadow DOM, State, and Rendering.
 */
export class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = {};
    }
    connectedCallback() {
        this.render();
        this.componentDidMount();
    }
    // lifecycle hook for children
    componentDidMount() { }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = /*html*/ `
						<link rel="stylesheet" href="src/styles/common/default.css" />
            ${this.template()}
        `;
        this.addEventListeners();
    }
    // default methods
    // styles(): string { return ''; }
    template() { return ''; }
    addEventListeners() { }
}
