
/*  <label>Square this number:
  <input type="number" id="square-input" size="2">
</label>
<button id="square-button">Calculate</button>
<br><br> */

// navOption1.addEventListener('click', changeBodyColor);

//..........Square this number............//

var inputs = document.querySelector('#square-input');
var buttons = document.querySelector('#square-button');
var resultSections = document.querySelector('.form-result-s');

function squareThisNumbers(){
  console.log('clickity click');

  var userInputs = inputs.value;
  console.log('inputs value is ', userInputs);

  var squareNumberInputs = Math.pow(userInputs, 2);
console.log(squareNumberInputs);

var newPTags = document.createElement('p');
  var newPTagTexts = document.createTextNode(squareNumberInputs);

  newPTags.appendChild(newPTagTexts);
  resultSections.appendChild(newPTags);
}

buttons.addEventListener('click', squareThisNumbers);



//.........Half this number..........//

var inputh = document.querySelector('#half-input');
var buttonh = document.querySelector('#half-button');
var resultSectionh = document.querySelector('.form-result-h');

function halfThisNumberh(){
  console.log('clickity click');

  var userInputh = inputh.value;
  console.log('input value is ', userInputh);
 
  var halfNumberInputh = (userInputh / 2);
console.log(halfNumberInputh);

var newPTagh = document.createElement('p');
  var newPTagTexth = document.createTextNode(halfNumberInputh);

  newPTagh.appendChild(newPTagTexth);
  resultSectionh.appendChild(newPTagh);
}

buttonh.addEventListener('click', halfThisNumberh);

//.........Calculate area of circle with radius:..........//



var input = document.querySelector('#area-input');
var button = document.querySelector('#area-button');
var resultSection = document.querySelector('.solution');

function calculateAreaCircle(){
  console.log('clickity click');

  var userInput = input.value;
  console.log('input value is ', userInput);

  var halfNumberInput = Math.pow(userInput,2)  * 3.14;
console.log(halfNumberInput);

var newPTag = document.createElement('p');
  var newPTagText = document.createTextNode(halfNumberInput);

  newPTag.appendChild(newPTagText);
  resultSection.appendChild(newPTag);
}

button.addEventListener('click', calculateAreaCircle);

var code = event.keycode || event.charCode