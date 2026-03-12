window.addEventListener("load", (event) => {
    const gameFrame= document.getElementById("gameFrame");
    const gameName= gameFrame?.name ?? "";
    if (gameName!= "") {
        console.log("LoadGame", gameName);
        const localGames = {
            "PaperIO2": "games/paperio2/index.html",
            "Cubes2048IO": "games/cubes2048/index.html",
            "NitroKnightsIO": "games/nitroknights/index.html",
            "BuckshotRoulette": "games/buckshot-roulette/index.html"
        };
        if (localGames[gameName]) {
            gameFrame.src = localGames[gameName];
        } else {
            gameFrame.src = `https://ubg17.github.io/${gameName}/`;
        }
    }    
});
