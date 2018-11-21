console.log('js ');

var nonu = document.querySelector('#noun');

var adjective = document.querySelector('#adjective');

var person =document.querySelector('#person');

var button =document.querySelector('#lib-button');

var story =document.querySelector('#story');

console.log(nonu);
console.log(adjective);
console.log(person);




function makeMadLib() {
     var userInput = noun.value;
     var userName = person.value;
     var userAdjective = adjective.value; 

console.log(userInput);
console.log(userName);
console.log(userAdjective);



var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode (`${userName} ${userAdjective} ${userInput}`);



newParagraph.appendChild(paragraphText);
story.appendChild(newParagraph);
}
button.addEventListener('click', makeMadLib);