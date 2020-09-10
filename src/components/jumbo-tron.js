import html from './jumbo-tron.html'
import css from './jumbo-tron.css'

export default class JumboTron extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `<style>${css.toString()}</style>${html}`
  }
}
