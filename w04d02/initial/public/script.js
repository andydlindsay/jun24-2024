console.log('inside script.js');

// create a new li element
const myLi = document.createElement('li'); // <li></li>

// create a text node that contains the string "Four"
const myTextNode = document.createTextNode('Four'); // "Four"

// add the text node as a child of the li
myLi.appendChild(myTextNode); // <li>Four</li>

// grab something that exists in the document (the ul with an id of "main-list")
const mainList = document.getElementById('main-list'); // null

// add the new li to the mainList
mainList.appendChild(myLi);
