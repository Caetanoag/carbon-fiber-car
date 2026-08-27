//anotações
/*hro :
3 primeiras do carrossel começa falando só do carro
corrossel é o resumo do conteudo no site
*/

import { staticHtmlServer } from "./staticHtmlServer.js";

const baseUrl = new URL("./html/", window.location.href).href;

const carrosselLoader = new staticHtmlServer("Carrossel", document.querySelector('#carrossel'), `${baseUrl}carrossel.html`);
const formLoader = new staticHtmlServer("Form", document.querySelector("#forms"), `${baseUrl}form.html`);
const navBarLoader = new staticHtmlServer("NavBar", document.querySelector('nav'), `${baseUrl}navbar.html`);
const footerLoader = new staticHtmlServer("Footer", document.querySelector('footer'), `${baseUrl}footer.html`);

formLoader.loadElement();
carrosselLoader.loadElement();
navBarLoader.loadElement();
footerLoader.loadElement();
