import {projectArr, projectIndex, createProject, removeProject, clickActiveProject, activeProject} from "./assets/scripts/project";
import { createItem } from "./assets/scripts/itemList";
import {completeIcon, menuIcon, priorityIcon, hashtagIcon, projectIcon, todayIcon } from "./assets/scripts/imgIndex";
import './style.css';


createProject('default project')
clickActiveProject(0);
console.log(activeProject)
createItem('first task', 'some task on default project', 'tomorrow', 'false')
console.log(activeProject)
createProject('second project')
createProject('third project')
clickActiveProject(2);
console.log(activeProject)
createItem('first task', 'some task on third project', 'next week', 'true')
console.log(activeProject)
removeProject(0)


console.log(projectArr)
