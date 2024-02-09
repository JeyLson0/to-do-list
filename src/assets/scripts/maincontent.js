import {addNewItemButtons, removeButtons } from "./sidecontainer";
import { addButton, sideContainer, contentItem } from "./DOM";


addButton.addEventListener('click', (e) => {
    let hidden = sideContainer.classList.toggle('hide-element')
    if (hidden == true) {
        removeButtons();
    } else {
        addNewItemButtons();
    }

});

