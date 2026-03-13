window.addEventListener("load", (event) => {
    const gameFrame= document.getElementById("gameFrame");
    const gameName= gameFrame?.name ?? "";
    if (gameName!= "") {
        console.log("LoadGame", gameName);
        const localGames = {
            "PaperIO2": "games/defc920c-9942-472d-8c2f-cb527e0ff766/index.html",
            "Cubes2048IO": "games/52355670-876d-4285-9fb4-16fda40d1a2f/index.html",
            "NitroKnightsIO": "games/ea653047-57cf-4c68-b581-203b26dfe5cc/index.html",
            "BuckshotRoulette": "games/0ee60948-40d6-4306-a8d9-329a3297d658/index.html"
        };
        if (localGames[gameName]) {
            gameFrame.src = localGames[gameName];
        } else {
            gameFrame.src = `https://ubg17.github.io/${gameName}/`;
        }
    }    
});
