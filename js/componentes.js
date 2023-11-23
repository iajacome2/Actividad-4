// EVENTO PERSONALIZADO
// En el script del primer componente
class PrimerComponente extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container mt-4">
                <button id="boton-interactivo" class="btn btn-danger">Haz clic</button>
            </div>
        `;
        const botonInteractivo = this.querySelector('#boton-interactivo');
        botonInteractivo.addEventListener('click', () => {
            const customEvent = new CustomEvent('evento-personalizado', {
                detail: { mensaje: '¡El botón fue clickeado!' }
            });
            document.dispatchEvent(customEvent);
        });
    }
}
customElements.define('primer-componente', PrimerComponente);

//MANEJO DE EVENTOS
// En el script del segundo componente
class SegundoComponente extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container mt-4">
                <div id="info-container" class="alert alert-info">Información aquí</div>
            </div>
        `;

        document.addEventListener('evento-personalizado', (event) => {
            const infoContainer = this.querySelector('#info-container');
            infoContainer.textContent = event.detail.mensaje;
        });
    }
}

customElements.define('segundo-componente', SegundoComponente);
