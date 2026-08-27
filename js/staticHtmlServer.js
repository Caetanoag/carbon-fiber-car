export class staticHtmlServer {
    constructor(name, htmlSection, htmlSrcPath){
        this.name = name;
        this.owner = htmlSection;
        this.src = htmlSrcPath;
    }
    async getSourceHtml(){
        const response = await fetch(this.src);
        const html = await response.text();
        return html;
    }
    async loadElement(){
        const html = await this.getSourceHtml();
        this.owner.innerHTML = html;
        console.log(`${this.name} loaded!`);
    }
}