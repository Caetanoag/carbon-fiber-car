export class ThemeSwitcher {
  constructor(rootElement, button) {
    this.rootElement = rootElement;
    this.button = button;

    this.toggleTheme = this.toggleTheme.bind(this);

    this.button.addEventListener("click", this.toggleTheme);
    this.loadFromLocalStorage();
  }

  #setTheme(theme) {
    if (theme === "dark") {
      this.rootElement.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      this.rootElement.setAttribute("data-theme", "light");
    } else {
      throw new Error("Invalid Theme");
    }
    localStorage.setItem("theme-preference", theme);
  }

  toggleTheme() {
    const currentTheme = this.rootElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      this.#setTheme("light");
    } else {
      this.#setTheme("dark");
    }
  }

  loadFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme-preference");
    if (savedTheme) {
      this.#setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        this.#setTheme("dark");
      } else {
        this.#setTheme("light");
      }
    }
  }
}
