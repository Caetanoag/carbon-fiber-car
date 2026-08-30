//anotações
/*hro :
3 primeiras do carrossel começa falando só do carro
corrossel é o resumo do conteudo no site
*/

import { handleForm } from "./FormHandler.js";
import { StaticHtmlServer } from "./StaticHtmlServer.js";
import { ThemeSwitcher } from "./ThemeSwitcher.js";

const baseUrl = new URL("./html/", window.location.href).href;

const carrosselLoader = new StaticHtmlServer(
	"Carrossel",
	document.querySelector("#carrossel"),
	`${baseUrl}carrossel.html`,
);
const formLoader = new StaticHtmlServer(
	"Form",
	document.querySelector("#forms"),
	`${baseUrl}form.html`,
);
const navBarLoader = new StaticHtmlServer(
	"NavBar",
	document.querySelector("nav"),
	`${baseUrl}navbar.html`,
);
const footerLoader = new StaticHtmlServer(
	"Footer",
	document.querySelector("footer"),
	`${baseUrl}footer.html`,
);

const carbonFiberSectionLoader = new StaticHtmlServer(
	"Section - Carbon Fiber",
	document.querySelector("#fibra-de-carbono"),
	`${baseUrl}sections/section.carbon.html`,
);

const jeskoSectionLoader = new StaticHtmlServer(
	"Section - Jesko",
	document.querySelector("#jesko"),
	`${baseUrl}sections/section.jesko.html`,
);

const navalSectionLoader = new StaticHtmlServer(
	"Section - Naval",
	document.querySelector("#naval"),
	`${baseUrl}sections/section.naval.html`,
);

const aeroSectionLoader = new StaticHtmlServer(
	"Section - Aero",
	document.querySelector("#aero"),
	`${baseUrl}sections/section.aero.html`,
);

async function init() {
	await formLoader.loadElement();
	await carrosselLoader.loadElement();
	await navBarLoader.loadElement();
	await footerLoader.loadElement();
	await carbonFiberSectionLoader.loadElement();
	await jeskoSectionLoader.loadElement();
	await navalSectionLoader.loadElement();
	await aeroSectionLoader.loadElement();
	const themeSwitcher = new ThemeSwitcher(
		document.documentElement,
		document.querySelector("#theme-toggle"),
	);
	themeSwitcher.loadFromLocalStorage();

	handleForm();
}
init();
