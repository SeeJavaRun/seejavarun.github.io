import html from './my-app.html'
import css from './my-app.css'

export default class MyApp extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<style>${css.toString()}</style>${html}`
  }
}
