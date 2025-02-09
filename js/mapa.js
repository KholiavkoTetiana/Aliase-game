import {model} from "./model.js";

export function placePlayer(xPosition, yPosition, player){
    const field = document.querySelector("#game-map");

    const x = field.clientWidth * xPosition;
    const y = field.clientHeight * yPosition;

    player.style.right = `${x}px`;
    player.style.top = `${y}px`;

    console.log("функція");
    console.log(x, y)

}

function createPlayer(index){
    const img = document.createElement("img");
    const boardDiv = document.querySelector("#board");
    img.id = "player" + index ;
    img.src = `../players/${index}.png`; // назва з індексом
    img.classList.add("player");

    img.style.transform = `translateX(${10 * index}px)`;
    boardDiv.appendChild(img);

    let playerPosition = model.teams[index].score;
    let coords = map[playerPosition];
    placePlayer(coords.x, coords.y, img);

    return img;
}
export const players = {};

export function initPlayers() {
    model.teams.forEach((team, index) => {
        players[team.name] = createPlayer(index);
        console.log(`створюємо ${index} гравця ${players[team.name]}`)
    });

}

//
// placePlayer(.78, .24);
// placePlayer(.78, .28);
// placePlayer(.78, .35);

export const map = {
    0:{x: .76, y: .03},
    1:{x: .76, y: .12},
    2:{x: .76, y: .20},
    3:{x: .76, y: .26},
    4:{x: .68, y: .26},
    5:{x: .61, y: .26},
    6:{x: .61, y: .32},
    7:{x: .61, y: .39},
    8:{x: .68, y: .39},
    9:{x: .76, y: .39},
    10:{x: .78, y: .45},
    11:{x: .78, y: .50},
    12:{x: .69, y: .50},
    13:{x: .61, y: .51},
    14:{x: .53, y: .51},
    15:{x: .45, y: .51},
    16:{x: .37, y: .51},
    17:{x: .37, y: .58},
    18:{x: .37, y: .65},
    19:{x: .45, y: .65},
    20:{x: .53, y: .65},
    21:{x: .60, y: .65},
    22:{x: .68, y: .65},
    23:{x: .76, y: .65},


}
//
// async function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// async function walkPlayer(){
//     for(let i = 1; i <= Object.keys(map).length; i++){
//         let coords= map[i];
//         console.log(`розміщуємо гравця на ${i} (${coords.x}, ${coords.y})`);
//         placePlayer(coords.x, coords.y);
//         await sleep(1000);
//     }
// }
//
// window.onload = () => walkPlayer();
