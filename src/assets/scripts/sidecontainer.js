import { formItemElem, createItemElements, removeFormValues, sideContainer} from "./DOM";
import { pushToDoList } from "./project"
import {  addEventsToItemList } from "./modal";


formItemElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formItemElem); /* formdata from the form elem */
    const dataObj = Object.fromEntries(data); /* formdata into an obj */
    const {titleInput, priorityInput, itemDeadLine, itemDescription} = dataObj; /* destructure data */
    const item = formInput(titleInput, priorityInput, itemDeadLine, itemDescription); /* factory func */
    pushToDoList(item);
    createItemElements(item.title);
    addEventsToItemList();
    sideContainer.classList.toggle('hide-element')
    removeFormValues();
})

function formInput(title, priority, deadline, description) {
    return {
        title, 
        priority, 
        deadline, 
        description, 
        completed: false
    }
};