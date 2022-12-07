import "./search-section.js";
import "./player-list.js";

class Modal extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get getRender() {
        return this.render();
    }

    render() {
        this.innerHTML = `
            <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalScrollable"
                tabindex="-1"
                aria-labelledby="exampleModalScrollableLabel"
                aria-hidden="true"
            >
                <div
                    class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none"
                >
                    <div
                        class="modal-content border-none shadow-xl relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
                    >
                        <div
                            class="modal-header flex flex-shrink-0 items-center justify-between gap-4 p-4 border-b rounded-t-md"
                        >
                            <search-section></search-section>
                            <button
                                type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="bg-slate-100 modal-body relative">
                            <player-list></player-list>
                        </div>
                    </div>
                </div>
            </div>        
        `;
    }
}

customElements.define("modal-section", Modal);
