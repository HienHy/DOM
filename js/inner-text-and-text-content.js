let firstItem = document.getElementById('one');
let showTextContent = firstItem.textContent;
let showInnerText = firstItem.innerText;


let msg = '<p> textContent: ' + showTextContent +'</p>';
msg +='<p> innerText : ' + showInnerText + '</p>';
let el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';