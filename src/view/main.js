import "../components/player-list.js";
import "../components/player-item.js";
import "../components/lineup-list.js";
import "../components/lineup-item.js";
import "../components/search-section.js";
import Player from "../data/player.js";

const getPlayer = (item) => {
    const playerList = document.querySelector("player-list");
    const searchPlayer = document.querySelector("search-section");
    searchPlayer.clickEvent = async () => {
        try {
            const result = await Player.searchPlayer(searchPlayer.value);
            playerList.players = result;
            getPlayerFromSearch(item);
        } catch (message) {
            playerList.renderError(message);
        }
    };
};

const getPlayerFromSearch = (player) => {
    const playerList = document.querySelector("player-list");
    const playerItem = document.querySelectorAll("player-item");
    for (const item of playerItem) {
        item.clickEvent = () => {
            playerList.innerHTML = "";
            player.setPlayerName = item.getPlayer.strPlayer;
            player.setPlayerImg = item.getPlayer.strCutout;
        };
    }
};

const addPlayerToLineUp = () => {
    const lineupItem = document.querySelectorAll("lineup-item");
    for (const item of lineupItem) {
        item.clickEvent = () => {
            if (item.getActionValue) {
                getPlayer(item);
            } else {
                item.setPlayerName = item.getPNameDefault;
                item.setPlayerImg = item.getPImgDefault;
            }
        };
    }
};

const handleLineUpValue = () => {
    const buttons = document.querySelectorAll(".btnLineUp");
    const lineup = document.querySelector("lineup-list");
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            lineup.setLineUp = e.target.value;
            addPlayerToLineUp();
        });
    }
};

const changeActionButtonPlayer = () => {
    document.querySelector("#btnAddPlayer").addEventListener("click", () => {
        const lineupItem = document.querySelectorAll("lineup-item");
        for (const item of lineupItem) {
            item.setAction = true;
        }
    });

    document.querySelector("#btnRemovePlayer").addEventListener("click", () => {
        const lineupItem = document.querySelectorAll("lineup-item");
        for (const item of lineupItem) {
            item.setAction = false;
        }
    });
};

export { addPlayerToLineUp, handleLineUpValue, changeActionButtonPlayer };
