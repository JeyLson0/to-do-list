export const completeIcon = require('../imgs/complete-icon.svg');
export const menuIcon = require('../imgs/menu-icon.svg');
export const priorityIcon = require('../imgs/priority-icon.svg');
export const hashtagIcon = require('../imgs/project-hashtags.svg');
export const projectIcon = require('../imgs/project-icon.svg');
export const todayIcon = require('../imgs/today-icon.svg');
export const addIcon = require('../imgs/add-icon.svg')
export const editIcon = require('../imgs/edit-button.svg')

const DOMCompleteIcon = document.querySelector('img[alt="complete-icon"]');
const DOMMenuIcon = document.querySelector('img[alt="menu-icon"]');
const DOMPriorityIcon = document.querySelector('img[alt="priority-icon"]');
const DOMProjectIcon = document.querySelector('img[alt="project-icon"]');
const DOMTodayIcon = document.querySelector('img[alt="today-icon"]');
const DOMAddItem = document.querySelector('#add-content-item')
const DOMAddProjList = document.querySelector('#add-project-list')


DOMCompleteIcon.setAttribute('src', completeIcon);
DOMMenuIcon.setAttribute('src', menuIcon);
DOMPriorityIcon.setAttribute('src', priorityIcon);
DOMTodayIcon.setAttribute('src', todayIcon);
DOMAddItem.setAttribute('src', addIcon)
DOMAddProjList.setAttribute('src', addIcon)