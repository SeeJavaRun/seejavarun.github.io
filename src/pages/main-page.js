import html from './main-page.html'
import css from './main-page.css'

export default class MainPage extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<style>${css.toString()}</style>${html}`
  }
}
