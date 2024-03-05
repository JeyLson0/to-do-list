import { buttonContainer, removeFormValues, removeButtons, contentContainer} from "./DOM";
import { activeProject  } from "./variables";

let activeTaskIndex;


const modal = document.getElementById('task-dialog');
const taskButtonContainer = document.getElementById('task-button-container');

const modalCancelButton = document.createElement('input');
const modalEditButton = document.createElement('input');
const modalSubmitButton = document.createElement('input');
const modalDeleteButton = document.createElement('input');
const modalInputs = document.querySelectorAll('.task-input')
const editForm = document.querySelector('#item-task')


modalCancelButton.type = 'button';
modalCancelButton.value = 'Cancel';

modalEditButton.type = 'button';
modalEditButton.value = 'Edit';

modalSubmitButton.type = 'submit';
modalSubmitButton.value = 'Submit';

modalDeleteButton.type = 'submit';
modalDeleteButton.value = 'Delete';

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
    buttonContainer[1].append(modalDeleteButton);
}

function addSubmitButton() {
    buttonContainer[1].append(modalCancelButton);
    buttonContainer[1].append(modalSubmitButton);
}

export function taskEvent(e) {
    addEditButton()
    elemIndex(e.target)
    fillForm(activeTaskIndex);
    modal.showModal();
}


export function addEventsToItemTitle() {
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

modalDeleteButton.addEventListener('click', deleteTask);

function deleteTask(e) {
    e.preventDefault();
    let toDoList = activeProject.toDoList;
    let i = activeTaskIndex;
    contentContainer.removeChild(contentContainer.children[i])
    toDoList.splice(i, 1);
    modal.close()
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

