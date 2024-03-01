 let activeProject;

 function setActiveProject(data) {
   return activeProject = data;
 }

 function setTitle(data) {
  return activeProject.title = data
 }


 export {activeProject, setActiveProject, setTitle};