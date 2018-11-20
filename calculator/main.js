// Create a new Javascript file and link to it with a script tag at the bottom.

// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.





// //square
var square = document.querySelector('#square-input');
 var squarButton = document.querySelector('#square-button');
 var resultSection = document.querySelector('#solution');

 function squareNum(){

 // get the value of the input
   var squareInput = square.value;
  
   //  that value
   var squareValue = squareInput * squareInput;
  
  // append the  value to the resultSection
  var newPTag = document.createElement('p');
   var newPTagText = document.createTextNode(squareValue);

   newPTag.appendChild(newPTagText);
   resultSection.appendChild(newPTag);
 }

 squarButton.addEventListener('click', squareNum);

 //Half

 var half = document.querySelector('#half-input');
 var halfButton = document.querySelector('#half-button');

 function halfNum(){
  // get the value of the input
  var halfInput = half.value;
  
   //  that value
   var halfValue = halfInput / 2;
  
   // append the  value to the resultSection
  var newPTagF = document.createElement('p');
   var newPTagTextF = document.createTextNode(halfValue);

   newPTagF.appendChild(newPTagTextF);
   resultSection.appendChild(newPTagF);
}

 halfButton.addEventListener('click', halfNum);

//area


var area = document.querySelector('#area-input');
var areaButton = document.querySelector('#area-button');

function areaNum(){

  // get the value of the input
  var areaInput = area.value;
  
  //  that value
  var areaValue = Math.pow(areaInput, 2) * Math.PI;
  
  // append the  value to the resultSection
  var newPTagC = document.createElement('p');
  var newPTagTextC = document.createTextNode(areaValue);

  newPTagC.appendChild(newPTagTextC);
  resultSection.appendChild(newPTagC);
}

areaButton.addEventListener('click', areaNum);





// Bonus: respond to key presses so that the user doesn't have to click the button.

//i make up some search about key respond there are many fun way but does not work with me .
// use method keyCode  