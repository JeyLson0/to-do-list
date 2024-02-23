import { buttonContainer, removeFormValues, removeButtons, contentContainer,   } from "./DOM";
import { activeProject  } from "./variables";

let activeTaskIndex;

const modal = document.getElementById('task-dialog');
const taskButtonContainer = document.getElementById('task-button-container');

const modalCancelButton = document.createElement('input');
const modalEditButton = document.createElement('input');
const modalSubmitButton = document.createElement('input');
const modalInputs = document.querySelectorAll('.task-input')
const editForm = document.querySelector('#item-task')

modalSubmitButton.type = 'submit';
modalSubmitButton.value = 'Submit';

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
    checkDisableAttribute() 
    modal.close()
    removeFormValues();
    removeButtons();
}

 function addEditButton() {
    buttonContainer[1].append(modalCancelButton);
    buttonContainer[1].append(modalEditButton);
}

function addSubmitButton() {
    buttonContainer[1].append(modalCancelButton);
    buttonContainer[1].append(modalSubmitButton);
}

function taskEvent(e) {
    addEditButton()
    elemIndex(e.target)
    fillForm(activeTaskIndex);
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
    for (let i = 0; i < contentContainer.childElementCount; i++) {
        if (contentItem[i] == elem) {
            activeTaskIndex = i;
           return activeTaskIndex;
        } 
    }
}

function fillForm(index) {
    let taskItem =  activeProject.toDoList[index];
    console.log(taskItem)
    const {title, priority, description, deadline, completed} = taskItem;
    taskTitle.value = title;
    taskPriority.value = priority;
    taskDeadline.value = deadline;
    taskDescription.value = description;
}

modalEditButton.addEventListener('click', editEvent)

function editEvent() {
    modalInputs.forEach((elem) => {
        elem.removeAttribute('disabled')
    })
    removeButtons();
    addSubmitButton();
}

modalSubmitButton.addEventListener('click', submitEvent)

function submitEvent(e) {
    e.preventDefault()
    const data = new FormData(editForm);
    const dataObj = Object.fromEntries(data);
    const {titleInput, priorityInput, itemDeadline, itemDescription} = dataObj;
    changeData(titleInput, priorityInput, itemDeadline, itemDescription);
    updateTitle()
    modal.close()
    removeButtons();
    checkDisableAttribute() 
}

function changeData(title, priority, deadline, description) {
    let list = activeProject.toDoList[activeTaskIndex];
    console.log(list)
    list.title = title;
    list.priority = priority;
    list.deadline = deadline;
    list.description = description;
}

function updateTitle() {
    let list = activeProject.toDoList[activeTaskIndex]
    let childElem = contentContainer.children[activeTaskIndex];
    let titleElem = childElem.children[1];
    titleElem.textContent = list.title;
}

function checkDisableAttribute() { 
    modalInputs.forEach(elem => {
        if (!elem.hasAttribute('disabled')) {
            elem.setAttribute('disabled', '')
        }
    })
}