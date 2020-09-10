import html from './java-proj.html'

const htmlDom = new DOMParser().parseFromString(html, 'text/html');

export class JavaProjHead extends HTMLTableSectionElement {
  constructor() {
    super();
    this.innerHTML = htmlDom.getElementById('java-proj-head').innerHTML
  }
}

export class JavaProjEntry extends HTMLTableRowElement {
  constructor() {
    super();
    this.innerHTML = htmlDom.getElementById('java-proj-entry').innerHTML
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

}
