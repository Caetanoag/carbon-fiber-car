//anotações
/*hro :
3 primeiras do carrossel começa falando só do carro
corrossel é o resumo do conteudo no site
*/
import { staticHtmlServer } from "/js/staticHtmlServer.js";

const baseHtmlSourceUrl = `http://${location.host}${location.pathname}html`


const carrosselLoader = new staticHtmlServer("Carrossel", document.querySelector('#carrossel'), `${baseHtmlSourceUrl}/carrossel.html`)
const formLoader = new staticHtmlServer("Form", document.querySelector("#forms"), `${baseHtmlSourceUrl}/form.html`)
const navBarLoader = new staticHtmlServer("NavBar", document.querySelector('nav'), `${baseHtmlSourceUrl}/navbar.html`)
const footerLoader = new staticHtmlServer("Footer", document.querySelector('footer'), `${baseHtmlSourceUrl}/footer.html`);
formLoader.loadElement();
carrosselLoader.loadElement();
navBarLoader.loadElement();
footerLoader.loadElement();
