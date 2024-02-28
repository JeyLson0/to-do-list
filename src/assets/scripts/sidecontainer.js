import { formItemElem, createItemElements, removeFormValues, sideContainer, mainContainer, navContainer } from "./DOM";
import { pushToDoList, projectArr } from "./project"
import {  addEventsToItemTitle,  } from "./modal";
import { addEventsToItemBtn } from "./completebutton";

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

function formInput(title, priority, deadline, description) {
    return {
        title, 
        priority, 
        deadline, 
        description, 
        completed: false,
        completeTask() {
            let completedProject = projectArr[2]
            if (this.completed == true) {
                completedProject.toDoList.push(this);
            }
        }
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


