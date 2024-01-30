export let linkTags = document.querySelectorAll('a') 
export let addProjectList = document.querySelector('#add-project-list')
export let inputProject = document.getElementById('#input-project-value')



linkTags.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
    })
});


/* inputProject.addEventListener('keydown', (e) => {
    if (e ==12) {
        
    }
}) */

function addNewProject(data) {
    let div = document.createElement('div');

}