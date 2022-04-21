let list = document.getElementsByTagName('ul')[0];

let newItemLast = document.createElement('li');
let newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);


let newItemFirst = document.createElement('li');
let newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst,list.firstChild);

let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length ;i++){
    listItems[i].className = 'cool';

}
let heading = document.querySelector('h2');
let headingText = heading.firstChild.nodeValue;
let totalItem = listItems.length;
let newHeading = headingText + '<span>'+totalItem + '</span>';
heading.innerHTML = newHeading;
