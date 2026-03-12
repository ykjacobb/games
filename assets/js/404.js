const mappings = {
    "1v1-lol-unblocked.html": "1.html",
    "animal-io-unblocked.html": "2.html",
    "aquapark-io-unblocked.html": "3.html",
    "archers-io-unblocked.html": "4.html",
    "bumper-ball-io-unblocked.html": "5.html",
    "cubes-2048-io-unblocked.html": "6.html",
    "death-car-io-unblocked.html": "7.html",
    "dots-io-unblocked.html": "8.html",
    "drift-dudes-unblocked.html": "9.html",
    "eat-the-fish-io-unblocked.html": "10.html",
    "gotet-io-unblocked.html": "11.html",
    "hammer-master-io-unblocked.html": "12.html",
    "hole-io-unblocked.html": "13.html",
    "knives-crash-unblocked.html": "14.html",
    "knives-io-unblocked.html": "15.html",
    "nitro-knights-io-unblocked.html": "16.html",
    "paper-io-2-unblocked.html": "17.html",
    "snake-io-war-unblocked.html": "18.html",
    "stair-race-3d-unblocked.html": "19.html",
    "super-heroes-io-unblocked.html": "20.html",
    "super-tornado-io-unblocked.html": "21.html",
    "tall-io-unblocked.html": "22.html",
    "trains-io-unblocked.html": "23.html",
    "transporters-io-unblocked.html": "24.html",
    "warrior-survival-io-unblocked.html": "25.html",
    "wormeat-io-unblocked.html": "26.html",
    "superhot-unblocked.html": "27.html"
};

let pageName = window.location.pathname.split('/').pop();
if (mappings[pageName]) {
    window.location.href = mappings[pageName];
}
