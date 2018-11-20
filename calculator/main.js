console.log("jalha");

// FIND THE SQUARE 
var findSolution = document.querySelector('#solution');
var squareInput = document.querySelector('#square-input');
var squareBot = document.querySelector('#square-button');

function makeItSquare(){
    var valueOne = squareInput.value;
    // var valueTwo = squareBot.value;
    var makeSquare = valueOne * valueOne;
    
    

var newPTag = document.createElement('p');
var newPTagText = document.createTextNode(makeSquare)
 newPTag.appendChild(newPTagText);
 findSolution.appendChild(newPTag);
}

squareBot.addEventListener('click', makeItSquare)

// PART TWO HALF

var halfInput = document.querySelector('#half-input')
var halfButton = document.querySelector('#half-button')

 function makeItHalf(){
 var v = halfInput.value;
//  var vTwo = halfButton.value;
 var result = v / 2;
 


 var newPTag = document.createElement('p');
 var newPTagText = document.createTextNode(result)
 
  newPTag.appendChild(newPTagText);
  halfButton.appendChild(newPTag);
 }
 
 halfButton.addEventListener('click', makeItHalf)

 // PART THREE
 
 var d = document.querySelector('#area-input');
 var k = document.querySelector('#area-button');

 function calCircle (){
     var valOne = d.value;
    //  var valTwo = k.value;
     var solutionCircle = (valOne * Math.PI)

 var newPTag = document.createElement('p');
 var newPTagText = document.createTextNode(solutionCircle)
 
  newPTag.appendChild(newPTagText);
  k.appendChild(newPTag);
 }
 

 

k.addEventListener('click',calCircle )
