class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchPlayerName").value;
    }

    render() {
        this.innerHTML = `
            <div class="flex justify-center">
                <div class="xl:w-96">
                    <div
                        class="flex items-stretch w-full"
                    >
                        <div class="flex items-center gap-4 w-full">
                            <i class="fa-solid fa-magnifying-glass text-gray-500 text-lg"></i>
                            <input 
                                id="searchPlayerName"
                                type="search"
                                class="bg-transparent w-full px-0 py-1.5 text-base font-normal text-gray-700 transition ease-in-out outline-none"
                                placeholder="Search player name"
                            />
                        </div>
                        <button
                            id="buttonSearchPlayer"
                            class="btn px-6 py-2.5 bg-mycolor-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-mycolor-light hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.querySelector("#buttonSearchPlayer").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define("search-section", Search);
