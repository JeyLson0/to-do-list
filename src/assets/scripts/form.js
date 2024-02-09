import { formTitle, formPriority, formDescription, formDueDate, formElem, textInputProject } from "./DOM";

export function removeValues() {
    formTitle.value = '';
    formPriority.value = '';
    formDueDate.value = '';
    formDescription.value = '';
}

formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formElem);
    const dataObj = Object.fromEntries(data);
    console.log(dataObj)
    addtolist.addItemTolist()
    removeValues()
})

