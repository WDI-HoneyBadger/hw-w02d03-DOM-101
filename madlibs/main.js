console.log('connected');


var noun= document.querySelector('#noun');
var adjective= document.querySelector('#adjective');
var person= document.querySelector('#person');
var button = document.querySelector('#lib-button');
var story = document.querySelector('#story');

function makeMadLib(){
    
  var nounInput = noun.value;
  var personInput = person.value;
  var adjInput = adjective.value;

  console.log(nounInput);
  console.log(adjInput);
  console.log(personInput);
  var newPTag = document.createElement('p');
  var newPTagText = document.createTextNode(`${personInput} ${adjInput} ${nounInput}`);

  newPTag.appendChild(newPTagText);
  story.appendChild(newPTag);
}

button.addEventListener('click', makeMadLib);
