 let activeProject;

 function setActiveProject(data) {
    activeProject = data;
    localStorage.setItem('activeProject', JSON.stringify(activeProject))
 }

 function setTitle(data) {
  return activeProject.title = data
 }

 let projectArr = []

 function setProjectArr(data) {
   return projectArr = data
 }

function updateLocalStorage() {
   localStorage.setItem('activeProject', JSON.stringify(activeProject))
   localStorage.setItem('projectArr', JSON.stringify(projectArr))
}

function replaceActiveInArr() {
   for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].title == activeProject.title) {
         return projectArr[i] = activeProject;
      }
   }
   
}

 export {activeProject, setActiveProject, setTitle, projectArr, setProjectArr, updateLocalStorage, replaceActiveInArr}; 