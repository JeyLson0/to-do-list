import { projectTitle, buttonContainer, removeButtons, clearBoard } from "./DOM";
import { activeProject } from "./variables";
import { removeProject, projectArr, projectElemArr, storeActiveProject, displayList } from "./project";

const projectDialog = document.querySelector('#project-dialog');
const projectTitleInput = document.querySelector('#edit-project-title');
const titleForm = document.querySelector('#title-project-form')

const cancelProjBtn = document.createElement('button');
cancelProjBtn.type = 'button';
cancelProjBtn.textContent = 'Cancel'
const editProjBtn = document.createElement('button');
editProjBtn.type = 'button';
editProjBtn.textContent = 'Edit';
const deleteProjBtn = document.createElement('button');
deleteProjBtn.type = 'button';
deleteProjBtn.textContent = 'Delete';
const confirmProjectBtn = document.createElement('button');
confirmProjectBtn.type = 'submit';
confirmProjectBtn.textContent = 'Accept'


projectTitle.addEventListener('click', titleEvent)

function titleEvent(e) {
    if (!(e.target.textContent == 'Today' || e.target.textContent == 'Priority'  || e.target.textContent == 'Completed')) {
        fillTitleForm();
        addTitleInitBtns();
        projectDialog.showModal();
    }
}

function addTitleInitBtns() {
    buttonContainer[2].append(cancelProjBtn);
    buttonContainer[2].append(editProjBtn);
    buttonContainer[2].append(deleteProjBtn);
}

function fillTitleForm() {
    projectTitleInput.value = activeProject.title;
}

cancelProjBtn.addEventListener('click', closeModal)

function closeModal(e) {
    removeButtons();
    disableFormChecker();
    projectDialog.close()
}

function disableFormChecker() {
    if (!projectTitleInput.hasAttribute('disabled')){
        projectTitleInput.setAttribute('disabled', '')
    }
}

editProjBtn.addEventListener('click', editProjectTitle)

function editProjectTitle(e) {
    removeButtons();
    addTitleEditBtn();
    projectTitleInput.removeAttribute('disabled');
}

function addTitleEditBtn() {
    buttonContainer[2].append(cancelProjBtn);
    buttonContainer[2].append(confirmProjectBtn);
}


deleteProjBtn.addEventListener('click', deleteProject)

function deleteProject() {
    for (let i = 0; projectArr.length > i; i++) {
        if (activeProject == projectArr[i]) {
            removeProject(i);
            clearBoard();
            setPreviousProj(i);
            projectDialog.close();
        }
    }
}

function setPreviousProj(currentIndex) {
    let i = currentIndex - 1;
    storeActiveProject(projectArr[i]);
    displayList();
}

confirmProjectBtn.addEventListener('click', confirmEvent)

function confirmEvent(e) {
    e.preventDefault()
    let data = new FormData(titleForm);
    let dataObj = Object.fromEntries(data);
    let dataTitle = dataObj.projectTitle;
    activeProject.title = dataTitle;
    projectTitle.textContent = activeProject.title
    changeProjectListTitle();
    projectDialog.close();
}

function changeProjectListTitle() {
    console.log(projectArr)
    console.log(projectElemArr)
    for (let i = 0; projectArr.length > i; i++ ){
        if (activeProject == projectArr[i]) {
            console.log(projectElemArr[i].lastChild.textContent)
            projectElemArr[i].lastChild.textContent = activeProject.title
        }
    }
}