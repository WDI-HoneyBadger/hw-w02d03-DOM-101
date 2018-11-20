/* var input = document.querySelector('#user-word');
var button = document.querySelector('#user-button');
var resultSection = document.querySelector('.form-result');

function capitalizeAndAppend(){
  console.log('clickity click');
  // get the value of the input
  var userInput = input.value;
  console.log('input value is ', userInput);
  // capitalize that value
  var capitalizedInput = userInput.toUpperCase();
  console.log(capitalizedInput);
  // append the capitalized value to the resultSection
  var newPTag = document.createElement('p');
  var newPTagText = document.createTextNode(capitalizedInput);

  newPTag.appendChild(newPTagText);
  resultSection.appendChild(newPTag);
}

button.addEventListener('click', capitalizeAndAppend); */


var button = document.querySelector('#lib-button');
console.log(button);

var inputNoun = document.querySelector('#noun');
console.log(inputNoun);

var inputAdj = document.querySelector('#adjective');
console.log(inputAdj);

var inputName = document.querySelector('#person');
console.log(inputName);

var inputStory = document.querySelector('#story');
console.log(inputStory);


 function makeMadLib(){
   var userValue = `${inputName.value} really hates ${inputAdj.value} ${inputNoun.value}`;
  console.log(userValue);
  var addParaghraph = document.createElement('p');
  var textNode = document.createTextNode(userValue);

  addParaghraph.appendChild(textNode);
  inputStory.appendChild(addParaghraph);


}



button.addEventListener('click', makeMadLib );
