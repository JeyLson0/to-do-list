const projectArr = [];
let activeProject; 

class Project{
    constructor(){
        this._title;
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

// Event when clicked it will create a new project
function createProject(data){
    if (typeof data !== 'string') {
        return console.log('title not a string');
    } else {
        let obj = new Project();
        obj.title = data;
        projectArr.push(obj)
    }
}

// Event when clicked it will remove that specified index.
function removeProject(IndexClicked) {
    projectArr.splice(IndexClicked, 1)
}

// Event when an object is clicked.
function clickActiveProject(projectIndex){
    let projectArrIndex = projectArr[projectIndex]
    console.log(`Project set to ${projectArrIndex.title}`)
    return activeProject = projectArrIndex;
}

export {projectArr, activeProject, createProject, removeProject, clickActiveProject}