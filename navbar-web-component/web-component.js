import html from './web-component.html'

export default class WepComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        const {cssContent, htmlContent} = this.htmlToElement(html);
        this._shadowRoot.innerHTML = '';
        this._shadowRoot.appendChild(cssContent)
        this._shadowRoot.appendChild(htmlContent)
        this._shadowRoot.querySelector('.title').innerHTML = 'Web Componet 1.0';
    }

    htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return { cssContent : template.content.firstChild, htmlContent: template.content.lastChild };
    }
}