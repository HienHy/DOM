let elements = document.getElementsByTagName('li'); // find <li> elements
if (elements.length >= 4){ // So sanh so luong element <li> thoa man dieu kien ko?
    let el = elements[3]; // select the four one using array syntax
    el.className='cool'; // change the value of the class attribute
}