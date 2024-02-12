import { formItemElem, createItemElements, removeFormValues} from "./DOM";
import { pushToDoList } from "./project"

formItemElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formItemElem); /* formdata from the form elem */
    const dataObj = Object.fromEntries(data); /* formdata into an obj */
    pushToDoList(dataObj);
    createItemElements(dataObj.titleInput);
    removeFormValues();
})