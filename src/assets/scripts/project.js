import { links, projectTitle, projectList, addProjectListIcon, formInputProject, textInputProject } from "./DOM";

export let activeProject;
export let projectArr = [];
export let projectElemArr = document.querySelectorAll('.project-link'); /* nodelist arr */

export class Project{
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
    if (typeof data !== 'string') {
        return console.log('title not a string');
    } else {
        let projectIndex = new Project(data);
        projectArr.push(projectIndex)
    }
}

function removeProject(IndexClicked) {
    projectArr.splice(IndexClicked, 1);
    projectElemArr.splice(IndexClicked, 1);
}

function clickActiveProject(e){
    let projectLink = e.target.parentNode;
    for (let i = 0; i < projectElemArr.length; i++){
        if (projectLink == projectElemArr[i]) {
            activeProject = projectArr[i]
            console.log(activeProject) 
            projectTitle.textContent = activeProject.title;
        }
    }
    return activeProject
}

function removeInput() {
    textInputProject.value = '';
}

function createProjectDOM(data) {
    let newList = document.createElement('li');
    let paragraph = document.createElement('p');
    newList.classList.add('project-link');
    projectList.appendChild(newList);
    newList.appendChild(paragraph)
    paragraph.textContent = data
    projectElemArr = document.querySelectorAll('.project-link');
    addEventProjectEvents() 
    return projectElemArr;
}

function addEventProjectEvents() {
    projectElemArr.forEach(element => {
        element.addEventListener('click', clickActiveProject)
    }); 
}


addProjectListIcon.addEventListener('click', (e) => {
    e.preventDefault();
    formInputProject.classList.toggle('hide-element');
})


formInputProject.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formInputProject);
    const dataObj = Object.fromEntries(data);
    createProjectDOM(dataObj.projectTitle);
    createProjectObj(dataObj.projectTitle)
    removeInput();
})



links.forEach(element => {
    element.addEventListener('click', (e) =>{
        e.preventDefault();
    });
});

 

createProjectObj('Title');
createProjectObj('Priority');
createProjectObj('Completed');
addEventProjectEvents();
