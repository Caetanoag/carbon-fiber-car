//anotações
/*hro :    
3 primeiras do carrossel começa falando só do carro
corrossel é o resumo do conteudo no site
*/
import { staticHtmlServer } from "/js/staticHtmlServer.js";
const carrosselLoader = new staticHtmlServer("Carrossel", document.querySelector('#carrossel'), "./html/carrossel.html")
const formLoader = new staticHtmlServer("Form", document.querySelector("#forms"), "./html/form.html")
const navBarLoader = new staticHtmlServer("NavBar", document.querySelector('nav'), "./html/navbar.html")
const footerLoader = new staticHtmlServer("Footer", document.querySelector('footer'), "./html/footer.html");
formLoader.loadElement();
carrosselLoader.loadElement();
navBarLoader.loadElement();
footerLoader.loadElement();