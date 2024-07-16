console.log('inside jquery-practice');

// listen for the document to fully load
$(document).ready(() => {

  // create new DOM elements
  const myLi1 = jQuery('<li>'); // <li></li>

  // find elements on the page
  const foundLis = jQuery('li'); // find all the li's on the page
  jQuery('.content'); // find all elements on the page that have a class of "content"
  jQuery('#hello'); // find an element on the page that has the id "hello"
  $('#hello'); // find an element on the page that has the id "hello"

  // create a new li and give it a text node of "Four"
  const myLi = $('<li>'); // <li></li>
  myLi.text('Four'); // <li>Four</li>

  const myLi2 = $('<li>Four</li>');

  // find the ul with an id of main-list in the DOM
  const mainList = $('#main-list');

  // add the li to the main-list
  // mainList.append(myLi); // makes it the last child
  // mainList.prepend(myLi); // makes it the first child

  // myLi.appendTo(mainList);
  myLi.prependTo(mainList);

  // find the button an id of our-button
  const ourButton = $('#our-button');
  console.log(ourButton);

  // ourButton.hide(3000);
  // ourButton.show(1000);

  // listen for the click event on the button
  ourButton.on('dblclick', () => {
    console.log('the button was clicked');
  });

  // listen for the mouse cursor to move on top of the button
  ourButton.on('mouseover', () => {
    console.log('the mouse is over the button');
  });

});
