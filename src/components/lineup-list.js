import "./lineup-item.js";

class LineUpList extends HTMLElement {
    constructor() {
        super();
        this._lineUp = "433";
        this.render();
    }

    set setLineUp(value) {
        this._lineUp = value;
        this.render();
    }

    get getLineUp() {
        if (this._lineUp === "433") {
            this.querySelector("#forward").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                `;
            this.querySelector("#midfielder").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
            `;
            this.querySelector("#defender").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
            `;
        } else if (this._lineUp === "442") {
            this.querySelector("#forward").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                `;
            this.querySelector("#midfielder").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
            `;
            this.querySelector("#defender").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
            `;
        } else if (this._lineUp === "4231") {
            this.querySelector("#forward").innerHTML += `
                <lineup-item></lineup-item>
                `;
            this.querySelector("#midfielder").innerHTML += `
                <div class="flex flex-col">
                    <div class="flex items-center justify-evenly gap-2 md:gap-8 lg:gap-2">
                        <lineup-item></lineup-item>
                        <lineup-item></lineup-item>
                        <lineup-item></lineup-item>
                    </div>   
                    <div class="flex items-center justify-evenly gap-2 md:gap-8 lg:gap-2">
                        <lineup-item></lineup-item>
                        <lineup-item></lineup-item>
                    </div>  
                </div>
            `;
            this.querySelector("#defender").innerHTML += `
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
                <lineup-item></lineup-item>
            `;
        }
    }

    render() {
        this.innerHTML = `
            <div id="forward" class="flex items-center justify-center gap-2 md:gap-8 lg:gap-2"></div>
            <div id="midfielder" class="flex items-center justify-center gap-2 md:gap-8 lg:gap-2"></div>
            <div id="defender" class="flex items-center justify-center gap-2 md:gap-8 lg:gap-2"></div>
            <div id="keeper" class="flex items-center justify-center gap-2 md:gap-8 lg:gap-2">
                <lineup-item></lineup-item>
            </div>
        `;

        this.getLineUp;
    }
}

customElements.define("lineup-list", LineUpList);
