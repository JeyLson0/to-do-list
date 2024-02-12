import { addButton, sideContainer, contentItem, addNewItemButtons, removeButtons } from "./DOM";


addButton.addEventListener('click', (e) => {
    let hidden = sideContainer.classList.toggle('hide-element')
    if (hidden == true) {
        removeButtons();
    } else {
        addNewItemButtons();
    }

});

