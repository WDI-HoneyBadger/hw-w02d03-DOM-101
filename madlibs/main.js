// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")



var inputA = document.querySelector('#noun');
var inputB = document.querySelector('#adjective');
var inputC = document.querySelector('#person');

var button = document.querySelector('#lib-button');
var resultSection = document.querySelector('#story');

function makeMadLib(){

  // get the value of the input
  var nounInput = inputA.value;
  var adjectiveInput = inputB.value;
  var personInput = inputC.value;
  
  //  that value
  var inputMakeMadLib = (` ${nounInput }  ${adjectiveInput } ${personInput }`);
  
  // append the  value to the resultSection
  var newPTag = document.createElement('p');
  var newPTagText = document.createTextNode(inputMakeMadLib);

  newPTag.appendChild(newPTagText);
  resultSection.appendChild(newPTag);
}

button.addEventListener('click', makeMadLib);


