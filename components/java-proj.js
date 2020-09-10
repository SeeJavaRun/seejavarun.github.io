
customElements.define("java-proj-head", class extends HTMLTableSectionElement {
  constructor() {
    super();
    this.innerHTML = `
      <tr>
        <th><b>Project Name</b></th>
        <th><span>Repository</span></th>
        <th>Build Tool</th>
        <th><i>Java Version</i></th>
        <th>Path</th>
        <th>Interface</th>
      </tr>
    `
  }
},{extends:'thead'})

customElements.define("java-proj-entry", class extends HTMLTableRowElement {

  constructor() {
    super();
    this.innerHTML = `
        <td><b id="name">NO-NAME</b></td>
        <td><a href="" id="href">NO-HREF</a></td>
        <td><span id="build-tool">NO-BUILD-TOOL</span></td>
        <td><i id="version">NO-VER</i></td>
        <td><span id="path">NO-</span>path</td>
        <td><span id="interface">NO-INTERFACE</span></td>
    `
  }

  static get observedAttributes() {
    return ['version', 'name', 'href', 'path','interface','build-tool'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const specialHandlers = {
      'href': (o, n, e) => {
        e.href = n;
        e.innerText = n.split('/').slice(3,5).join('/')
      }
    }
    if(specialHandlers.hasOwnProperty(name)) {
      specialHandlers[name](oldValue, newValue, this.querySelector('#'+name))
    } else {
      this.querySelector('#'+name).innerText = newValue
    }
  }

},{extends:'tr'})
