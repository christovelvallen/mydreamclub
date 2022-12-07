import "./style/output.css";
import "/node_modules/@fortawesome/fontawesome-free/js/fontawesome.js";
import "/node_modules/@fortawesome/fontawesome-free/js/brands.js";
import "/node_modules/@fortawesome/fontawesome-free/js/solid.js";
import "/node_modules/tw-elements/dist/js/index.min.js";
import {
    addPlayerToLineUp,
    handleLineUpValue,
    changeActionButtonPlayer,
} from "./view/main.js";

document.addEventListener("DOMContentLoaded", () => {
    addPlayerToLineUp();
    handleLineUpValue();
    changeActionButtonPlayer();
});
