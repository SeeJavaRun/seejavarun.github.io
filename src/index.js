import JumboTron from './components/jumbo-tron.js';
import {JavaProjEntry, JavaProjHead} from "./components/java-proj";
import MyApp from './components/my-app.js';

document.addEventListener("DOMContentLoaded", () => {
  customElements.define('jumbo-tron', JumboTron)
  customElements.define('java-proj-head', JavaProjHead, {extends: 'thead'})
  customElements.define('java-proj-entry', JavaProjEntry, {extends: 'tr'})
  customElements.define('my-app', MyApp)
  document.body.innerHTML = `<my-app></my-app>`;
});
