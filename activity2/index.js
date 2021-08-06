/*
 1- Create an event listener in the button (add new item) that allows the user to add new items to the list and highlight each item when clicking on them.
 2- The heading <h2> should change the text accordingly to the highlighted list item. 
 */

// Selectors
let addButton = document.querySelector("#button");
let listItems = document.querySelector("#list > li")
// Iterate the ul items
const highlight = () => {
for (let i = 0; i < listItems.length; i++) {
 listItems.style.backgroundColor = "orange";
}
}
// Event Listener - Click the item change the heading

// Event Listener - Click the button add a new item
// Event Listener - highlight list.
listItems.addEventListener("click", highlight)


