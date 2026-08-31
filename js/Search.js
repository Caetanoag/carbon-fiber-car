
export const handleSearch = async () => {

    const searchResultDiv = document.getElementById("search-result");
    const searchBarText = document.getElementById("txt-busca");
    const searchBarSend = document.getElementById("txt-submit");

    searchBarSend.addEventListener("click", async (e) => {
        searchResultDiv.innerHTML = "";
        e.preventDefault();
        while(searchBarText.value.includes(" ")){
            searchBarText.value = searchBarText.value.replaceAll(" ", "")
        }
        const words = searchBarText.value.split(" ");
        console.log(words)
        if(!words){
            return;
        }
        const json = await fetch("./sections.search.jsonc").then((r) => r.json());
        const ul = document.createElement("ul");
        for(const section of json.sections){
            for(const keyword of section.keywords){
                for(const word of words){
                    if(keyword.toLowerCase() === word.toLowerCase()){
                        const nameOfSection = section.name;
                        const idOfSection = section.id;
                        const li = document.createElement("li");
                        li.innerHTML = `
                            <a href="#${idOfSection}">${nameOfSection}</a>
                        `
                        ul.append(li);
                    }
                }
            }
        }
        searchResultDiv.append(ul);
    })
}
