/* projectlist */
export const projectList = document.querySelector('#project-list')
export const addProjectListIcon = document.querySelector('#add-project-list')
export const formInputProject = document.querySelector('#form-project-title')
export const textInputProject = document.querySelector('#input-new-project')
export const links = document.querySelectorAll('a')

/* side form */
export const formTitle = document.getElementById('title');
export const formPriority = document.getElementById('priority');
export const formDueDate = document.getElementById('due-date');
export const formDescription = document.getElementById('description');
export const formItemElem = document.getElementById('form-item-details');


/* main-content */
export const addButton = document.querySelector('#hero-header-container>button');
export const contentItem = document.querySelectorAll('.content-item');
export const projectTitle = document.querySelector('#project-title')
export const contentContainer = document.querySelector('#content-container');


/* side container */
export const titleSection = document.getElementById('title');
export const prioritySection = document.getElementById('priority');
export const deadlineSection = document.getElementById('due-date');
export const descriptionSection = document.getElementById('description');
export const sideContainer = document.getElementById('side-container');

export const buttonContainer = document.querySelectorAll('.button-container');

export const sideCancelButton = document.createElement('input');
export const sideAddButton = document.createElement('input');

sideCancelButton.addEventListener('click', cancelSideBarEvent);
sideCancelButton.type = 'button';
sideCancelButton.value = 'Cancel';

sideAddButton.type = 'submit';
sideAddButton.value = 'Enter';


/* modal */
/* export const modal = document.getElementById('task-dialog');
export const taskButtonContainer = document.getElementById('task-button-container');
export const modalCancelButton = document.createElement('input');
export const modalEditButton = document.createElement('input');

modalCancelButton.addEventListener('click', cancelModalEvent);
modalCancelButton.type = 'button';
modalCancelButton.value = 'Cancel';

modalEditButton.type = 'button';
modalEditButton.value = 'Edit'; */

/* DOM main-content functions and events */
addButton.addEventListener('click', (e) => {
    let hidden = sideContainer.classList.toggle('hide-element')
    if (hidden == true) {
        removeButtons();
    } else {
        addNewItemButtons();
    }
});


export function createItemElements(objTitle) {
    let contentItem = document.createElement('div');
    contentItem.classList.add('content-item');
    let checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    let itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = objTitle;
    contentContainer.appendChild(contentItem);
    contentItem.appendChild(checkButton);
    contentItem.appendChild(itemTitle);
}



export function clearBoard() {
   while(contentContainer.hasChildNodes()){
    contentContainer.removeChild(contentContainer.firstChild);
   }
}

addProjectListIcon.addEventListener('click', (e) => {
    e.preventDefault();
    formInputProject.classList.toggle('hide-element');
})

links.forEach(element => {
    element.addEventListener('click', (e) =>{
        e.preventDefault();
    });
});


export function removeFormValues() {
    formTitle.value = '';
    formPriority.value = '';
    formDueDate.value = '';
    formDescription.value = '';
}


function cancelSideBarEvent() {
    sideContainer.classList.toggle('hide-element')
    removeFormValues();
    removeButtons();
}

/* function cancelModalEvent() {
    modal.close()
    removeFormValues();
    removeButtons();
}
 */
export function addNewItemButtons() {
    buttonContainer[0].append(sideCancelButton);
    buttonContainer[0].append(sideAddButton);
}

/* export function addEditButton() {
    buttonContainer[1].append(modalCancelButton);
    buttonContainer[1].append(modalEditButton);
} */

export function removeButtons() {
    buttonContainer.forEach(element => {
        if (element.childElementCount > 0) {
            for(let i = 0; i <= element.childElementCount; i++){
                element.removeChild(element.firstChild);
            }
        }
    });
   
}
