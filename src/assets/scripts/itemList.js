
class ListItem{
    constructor(title, description, dueDate, priority){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }
}


// Once clicked submit, modal will use data into this args 
export function createItem (title, description, dueDate, priority) {
    let toDoItem = new ListItem(title, description, dueDate, priority);
    activeProject.toDoList.push(toDoItem);
}

