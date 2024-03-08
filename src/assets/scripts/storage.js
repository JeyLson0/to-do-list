import { createProjectObj, createProjectDOM, addEventProjectEvents, storeActiveProject, displayList, pushToDoList, addEventsToItemBtn} from "./project";
import { activeProject, projectArr, setActiveProject, setProjectArr} from "./variables";
import { projectTitle, createItemElements,clearBoard } from "./DOM";
import { addEventsToItemTitle } from "./modal";
import { formInput } from "./sidecontainer";


export function initFunc() {
    const init = localStorage.getItem('init')
    if (init == null) {
        defaultProjectList();
        defaultToDoList();
        storeActiveProject(projectArr[0]);
        displayActiveList()
        localStorage.setItem('init', 'true');
        return localStorage.key(0)
    }
    
    if (init == 'true') {
        displayActiveList();
        displayProjectList();
    }
}


function displayActiveList() {
    let localActiveProj = JSON.parse(localStorage.getItem('activeProject')) 
    let localProjArr = JSON.parse(localStorage.getItem('projectArr'))
    setActiveProject(localActiveProj);
    setProjectArr(localProjArr);
    projectTitle.textContent = activeProject.title;
    displayList();
    addEventProjectEvents();
}


function displayProjectList() {
    let localProjArr = JSON.parse(localStorage.getItem('projectArr'))
    localProjArr.forEach(element => {
        if (!(element.title == 'Today' || element.title == 'Priority' || element.title == 'Completed')) {
            createProjectDOM(element.title)
        }
    });
}


function defaultProjectList() {
    createProjectObj('Today');
    createProjectObj('Priority');
    createProjectObj('Completed');
    createProjectObj('Grocery List');
    createProjectDOM('Grocery List');
    createProjectObj('Books to Read');
    createProjectDOM('Books to Read');
    addEventProjectEvents();

}
  
 
function defaultToDoList() {
    storeActiveProject(projectArr[0]);
    let todayTaskOne = formInput('Create a project',"true",'',"Create a Project by clicking the \"+\" button beside the \"Projects\" tab on the navigation bar.")
    let todayTaskTwo = formInput("Edit/Delete Project", "true", "", "Click the Project Title inside the middle container.\n\nClick 'edit' to edit the project's title.\n\nClick 'delete' to remove the project." )
    let todayTaskThree = formInput("Create a list", "true", '', "Create a list by clicking the \"+\" button on the upper right corner of the middle container.")
    let todayTaskFour = formInput("Completing a task", "true", '', "Click the circle button to move the list to the \"Completed\" tab.\n\nNote: you need to delete the list manually by clicking the 'delete' button")
    createList(todayTaskOne);
    createList(todayTaskTwo);
    createList(todayTaskThree);
    createList(todayTaskFour);
    clearBoard();
    storeActiveProject(projectArr[1]);
    let priorityTaskOne = formInput('Workout', 'true', '', 'Monday = Chest day');
    let priorityTaskTwo = formInput('Code', 'true', '', 'Refactor To-do-list code');
    createList(priorityTaskOne);
    createList(priorityTaskTwo);
    clearBoard();
    storeActiveProject(projectArr[3]);
    let groceryTaskOne = formInput("1 - 1 liter Bottle Water", 'false', '', '');
    let groceryTaskTwo = formInput("1 - Dozen Eggs", 'false', '', '');
    let groceryTaskThree = formInput("3 - White Onions", 'false', '', '');
    let groceryTaskFour = formInput("2 - Carrots", 'false', '', '');
    createList(groceryTaskOne);
    createList(groceryTaskTwo);
    createList(groceryTaskThree);
    createList(groceryTaskFour);
    clearBoard();
    storeActiveProject(projectArr[4]);
    let booksTaskOne = formInput("Rich Man in Babylon", 'false', '', '');
    let bookTaskTwo = formInput("Rich Dad Poor Dad", 'false', '', '');
    createList(booksTaskOne);
    createList(bookTaskTwo);
    clearBoard();
}

function createList(formInput) {
    pushToDoList(formInput)
    createItemElements(formInput.title)
    addEventsToItemTitle()
    addEventsToItemBtn()
}
