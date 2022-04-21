let elements = document.getElementsByClassName('hot'); //find hot item
if (elements.length > 2){ // if 3 or more are found
    let el = elements[0]; // select the first in the NodeList
    el.className='cool'; // change the  value of  its class attribute
}
