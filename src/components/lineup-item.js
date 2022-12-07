import "./modal-section.js";
import fanArt from "../assets/fan-art.png";

class LineUpItem extends HTMLElement {
    constructor() {
        super();
        this._playerName = "Player";
        this._playerImg = fanArt;
        this._action = true;
        this.render();
    }

    set setPlayerName(player) {
        this._playerName = player;
        this.render();
    }

    set setPlayerImg(player) {
        this._playerImg = player;
        this.render();
    }

    get getPNameDefault() {
        return "Player";
    }
    get getPImgDefault() {
        return fanArt;
    }

    get playerNameLength() {
        if (this._playerName.length > 8) {
            return `
                <marquee scrollamount="2">
                    ${this._playerName}
                </marquee>
            `;
        } else {
            return this._playerName;
        }
    }

    set setAction(value) {
        this._action = value;
        this.render();
    }

    get getActionValue() {
        return this._action;
    }

    get getAction() {
        if (this._action) {
            return `
                <button
                    type="button"
                    class="inline-block px-2 py-1  text-slate-800 hover:text-orange-600 t font-medium text-base leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalScrollable"
                >
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
                <modal-section></modal-section>
            `;
        } else {
            return `
                <button
                    class="inline-block px-2 py-1  text-slate-800 hover:text-red-600 font-medium text-base leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
        }
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="flex flex-col items-center flex-1">
                <img class="w-10 max-[320px]:w-6 md:w-14 lg:w-10" src=${this._playerImg} alt=" " />
                <p class="bg-white/50 w-16 px-1 text-xs md:text-base lg:text-xs text-center flex justify-center items-center">
                    ${this.playerNameLength}
                </p>
                <div>
                    ${this.getAction}
                </div>
            </div>
        `;

        this.querySelector("button").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define("lineup-item", LineUpItem);
