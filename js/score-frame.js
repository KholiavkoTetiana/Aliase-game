import {readStorage, model} from "./model.js";
import {controller} from "./controller.js";
import {initPlayers} from "./mapa.js";

readStorage();

function renderTeamsToPlay(teams) {
    const teamsToPlayDiv = document.querySelector("#team-to-play-div");
    teamsToPlayDiv.innerHTML = '';

    if (!teams || teams.length === 0) {
        console.log("Немає доступних команд.");
        return;
    }

    for (const team of teams) {

        const teamWrapper = document.createElement("div");
        teamWrapper.classList.add("team-item");

        const teamsToPay = document.createElement("p");
        teamsToPay.textContent = team.name + ": ";
        // teamsToPay.classList.add("team");
        teamWrapper.appendChild(teamsToPay);

        const teamsScore = document.createElement("p");
        teamsScore.textContent = team.score;
        teamsScore.classList.add("score");
        teamsScore.dataset.teamToPlay = team.score; // Додає data-team-name до кнопки
        teamWrapper.appendChild(teamsScore);

        teamsToPlayDiv.appendChild(teamWrapper);
    }
}




function renderActiveTeam(){
    document.querySelector("#active-team").textContent = controller.getActiveTeam().name;
}
renderActiveTeam();

function renderRound(){
    document.querySelector("#current-round").textContent = model.round;
}
renderRound();


function teamToPlay(){
        renderTeamsToPlay(model.teams); ///??????

}

teamToPlay();

initPlayers();
