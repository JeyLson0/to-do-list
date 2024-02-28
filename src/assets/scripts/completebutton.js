import { activeProject } from "./variables";
import { contentContainer } from "./DOM";

export function addEventsToItemBtn() {
    let checkButton = document.querySelectorAll('.check-button'); 
    checkButton.forEach((elem) => {
        elem.addEventListener('click', buttonEvent)
    })
}

function buttonEvent(e){
    let checkButton = document.querySelectorAll('.check-button');
    let toDoList = activeProject.toDoList;
    for (let i = 0; checkButton.length; i++) {
        if (e.target == checkButton[i]) {
            let task = toDoList[i]
            task.completed = true;
            contentContainer.removeChild(contentContainer.children[i])
            toDoList.splice(i, 1);
            return task.completeTask();
        }
    }
}