import { formItemElem, createItemElements, removeFormValues, sideContainer, mainContainer, navContainer } from "./DOM";
import { pushToDoList, addEventsToItemBtn } from "./project"
import {  addEventsToItemTitle } from "./modal";


formItemElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formItemElem); /* formdata from the form elem */
    const dataObj = Object.fromEntries(data); /* formdata into an obj */
    const {titleInput, priorityInput, itemDeadline, itemDescription} = dataObj; /* destructure data */
    const item = formInput(titleInput, priorityInput, itemDeadline, itemDescription); /* factory func */
    pushToDoList(item);
    createItemElements(item.title);
    addEventsToItemTitle();
    addEventsToItemBtn();
    sideContainer.classList.toggle('hide-element')
    removeFormValues();
})

export function formInput(title, priority, deadline, description) {
    return {
        title, 
        priority, 
        deadline, 
        description, 
        completed: false,
    }
 
};



mainContainer.addEventListener('click', closeSideContainer, true)
navContainer.addEventListener('click', closeSideContainer, true)

function closeSideContainer() {
    if(!(sideContainer.classList.contains('hide-element'))){
        sideContainer.classList.add('hide-element');
        removeFormValues();
    }
}




