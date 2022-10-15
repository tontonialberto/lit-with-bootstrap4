import {LitElement, html} from 'lit';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyElement extends LitElement {
    static properties = {
        columns: []
    }
    
    constructor() {
        super();
        this.columns = [
            { message: 'Hello', backgroundColor: 'red', value: 12 },
            { message: 'World', backgroundColor: 'green', value: 42 }
        ]
    }

    render() {
        const columnSize = 12 / this.columns.length;
        console.log(this.columns);
        return html`
            <div class="row">
                ${this.columns.map(col => html`
                    <div class="col-md-${columnSize}" style="background-color: ${col.backgroundColor}">
                        ${col.message}, ${col.value}
                    </div>`
                )}
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('my-element', MyElement);