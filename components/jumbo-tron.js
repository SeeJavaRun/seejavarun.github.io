customElements.define('jumbo-tron', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML =`
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"> 
      <div class="jumbotron">
        <h1 class="display-1"><slot name="title">NO TITLE</slot></h1>
        <p class="lead"><slot name="lead">NO LEAD</slot></p>
      </div>
    `
  }
})
