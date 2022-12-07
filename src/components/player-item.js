class PlayerItems extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get getPlayer() {
        return this._player;
    }

    render() {
        this.innerHTML = `
            <div 
                class="playerItem bg-slate-100 flex items-center justify-between p-4 cursor-pointer hover:bg-mycolor-primary hover:text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
            >
                <div class="flex gap-4 items-center">
                    <img class="w-10" src=${this._player.strCutout} alt=" ">
                    <p class="text-base">${this._player.strPlayer}</p>
                </div>
            </div>
        `;

        this.querySelector(".playerItem").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define("player-item", PlayerItems);
