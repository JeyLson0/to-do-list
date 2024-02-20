import { buttonContainer, removeFormValues, removeButtons, contentContainer,   } from "./DOM";
import { activeProject  } from "./variables";

 const modal = document.getElementById('task-dialog');
 const taskButtonContainer = document.getElementById('task-button-container');

 const modalCancelButton = document.createElement('input');
 const modalEditButton = document.createElement('input');

modalCancelButton.type = 'button';
modalCancelButton.value = 'Cancel';

modalEditButton.type = 'button';
modalEditButton.value = 'Edit';

const taskTitle = document.querySelector('#task-title')
const taskPriority = document.querySelector('#task-priority')
const taskDeadline = document.querySelector('#task-due-date') 
const taskDescription = document.querySelector('#task-description')
 

modalCancelButton.addEventListener('click', cancelModalEvent);
function cancelModalEvent() {
    modal.close()
    removeFormValues();
    removeButtons();
}

 function addEditButton() {
    buttonContainer[1].append(modalCancelButton);
    buttonContainer[1].append(modalEditButton);
}

function taskEvent(e) {
    addEditButton()
    let index = elemIndex(e.target)
    fillForm(index);
    modal.showModal();
}


export function addEventsToItemList() {
    let contentItem = document.querySelectorAll('.item-title');
    contentItem.forEach((elem) => {
        elem.addEventListener('click', taskEvent)
    })
}


function elemIndex(elem) {
    let contentItem = document.querySelectorAll('.item-title');
    let elemIndex;
    for (let i = 0; i < contentContainer.childElementCount; i++) {
        if (contentItem[i] == elem) {
           elemIndex = i;
           return elemIndex
        } 
    }
}

function fillForm(index) {
    let taskItem =  activeProject.toDoList[index];
    const {title, priority, description, deadline, completed} = taskItem;
    taskTitle.value = title;
    taskPriority.value = priority;
    taskDescription.value = description;

}