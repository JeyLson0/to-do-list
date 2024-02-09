import { contentContainer } from "./DOM";

export function addItemTolist() {
    let contentItem = document.createElement('div');
    contentItem.classList.add('content-item')
    let checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    let itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    contentContainer.appendChild(contentItem);
    contentItem.appendChild(checkButton);
    contentItem.appendChild(itemTitle);
}

