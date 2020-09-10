import JumboTron from './components/jumbo-tron.js';
import {JavaProjEntry, JavaProjHead} from "./components/java-proj";
import MainPage from './pages/main-page.js';

document.addEventListener("DOMContentLoaded", () => {
  customElements.define('jumbo-tron', JumboTron)
  customElements.define('java-proj-head', JavaProjHead, {extends: 'thead'})
  customElements.define('java-proj-entry', JavaProjEntry, {extends: 'tr'})
  customElements.define('main-page', MainPage)
  document.body.innerHTML = `<main-page></main-page>`;
});
