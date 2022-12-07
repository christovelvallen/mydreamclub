import "./player-item.js";

class PlayerList extends HTMLElement {
    set players(players) {
        this._players = players;
        this.render();
    }

    renderError(message) {
        this.innerHTML += `<p class="m-4">${message}</p>`;
    }

    render() {
        this.innerHTML = "";
        this._players.forEach((player) => {
            const playerItemElement = document.createElement("player-item");
            if (player.strCutout !== null) {
                playerItemElement.player = player;
                this.appendChild(playerItemElement);
            }
        });
    }
}

customElements.define("player-list", PlayerList);
