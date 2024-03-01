import { createItemElements, clearBoard, projectTitle, projectList, formInputProject, textInputProject } from "./DOM";
import { activeProject, setActiveProject } from "./variables";
import { addEventsToItemTitle } from "./modal";
import { addEventsToItemBtn } from "./completebutton";

export let projectArr = [];
export let projectElemArr = document.querySelectorAll('.project-link');

class Project{
    constructor(arg){
        this._title = arg;
        this._toDoList = [];
    }
    set title(data) {
        this._title = data;
    }
    get title(){
        return this._title;
    }
    get toDoList(){
        return this._toDoList;
    } 
}

function createProjectObj(data){
    if (data.trim().length == 0) {
        return console.log('title not a string');
    } else {
        let projectIndex = new Project(data);
        projectArr.push(projectIndex)
    }
}

export function removeProject(IndexClicked) {
    projectArr.splice(IndexClicked, 1);
    let htmlIndex = IndexClicked - 3;
    projectList.removeChild(projectList.children[htmlIndex])
    return projectElemArr = document.querySelectorAll('.project-link');
} 

function clickActiveProject(elem){
    clearBoard();
    let projectLink = elem.target.parentNode;
    for (let i = 0; i < projectElemArr.length; i++){
        if (projectLink == projectElemArr[i]) {
            storeActiveProject(projectArr[i]);
            projectTitle.textContent = activeProject.title;
            return displayList();
        }
    }
}

export function storeActiveProject(projectIndex) {
    setActiveProject(projectIndex);
    projectTitle.textContent = activeProject.title;
}

function removeInput() {
    textInputProject.value = '';
}

function createProjectDOM(data) {
    if (data.trim().length > 0) {
        let newList = document.createElement('li');
        let paragraph = document.createElement('p');
        paragraph.classList.add('project-name')
        newList.classList.add('project-link');
        newList.classList.add('added-link');
        projectList.appendChild(newList);
        newList.appendChild(paragraph)
        paragraph.textContent = data
        projectElemArr = document.querySelectorAll('.project-link');
        addEventProjectEvents();
        return projectElemArr;
    }
 
}

function addEventProjectEvents() {
    projectElemArr.forEach(element => {
        element.addEventListener('click', clickActiveProject)
    }); 
}


export function pushToDoList(data) {
    activeProject.toDoList.push(data);
};


formInputProject.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formInputProject);
    const dataObj = Object.fromEntries(data);
    createProjectDOM(dataObj.projectTitle);
    createProjectObj(dataObj.projectTitle)
    removeInput();
    formInputProject.classList.toggle('hide-element');
})

export function displayList() {
    let list = activeProject.toDoList;
    if (activeProject.title == 'Completed') {
        if (list.length > 0) {
            list.forEach(obj => {
                createItemElements(obj.title)
                addEventsToItemTitle();
            });
            return
        }
    }
    if (list.length > 0) {
        list.forEach(obj => {
            createItemElements(obj.title)
            addEventsToItemTitle();
            addEventsToItemBtn();
        });
    }
}

 
createProjectObj('Today');
createProjectObj('Priority');
createProjectObj('Completed');
addEventProjectEvents();
storeActiveProject(projectArr[0]);
