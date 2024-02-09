import * as form from "./form"
import { sideAddButton, sideCancelButton, sideEditButton, buttonContainer, sideContainer } from "./DOM";

sideCancelButton.type = 'button';
sideCancelButton.value = 'Cancel';

sideAddButton.type = 'submit';
sideAddButton.value = 'Enter';

sideEditButton.type = 'button';
sideEditButton.value = 'Edit';

sideCancelButton.addEventListener('click', (e) => {
    sideContainer.classList.toggle('hide-element')
    form.removeValues()
    removeButtons();
})


export function addNewItemButtons() {
    buttonContainer.append(sideCancelButton);
    buttonContainer.append(sideAddButton);
}

export function addEditButton() {
    buttonContainer.append(editButton);
}


export function removeButtons() {
    console.log(buttonContainer.childNodes.length)
    for(let i = 0; i <= buttonContainer.childElementCount; i++){
        buttonContainer.removeChild(buttonContainer.firstChild);
    }
}

