console.log('connected');

//Square this number
var calNum =document.querySelector('#square-input');
var calButton = document.querySelector('#square-button');
var calSolution = document.querySelector('#solution');


function calculator(){
var calInputNum = calNum.value;
calInputNum= calInputNum*calInputNum;
console.log(calInputNum);

var newCalTag = document.createElement('p');
var nweCalText = document.createTextNode(calInputNum);
newCalTag.appendChild(nweCalText);
calSolution.appendChild(newCalTag);
}


calButton.addEventListener('click', calculator);

//Half This Number

var halfNum =document.querySelector('#half-input');
var halfButton = document.querySelector('#half-button');


function halfThisNumber(){
var halfInputNum = halfNum.value;
halfInputNum= halfInputNum-(halfInputNum/2);
console.log(halfInputNum);

var newHalfTag = document.createElement('p');
var nweHalfText = document.createTextNode(halfInputNum);
newHalfTag.appendChild(nweHalfText);
calSolution.appendChild(newHalfTag);
}


halfButton.addEventListener('click', halfThisNumber);

//Calculate area of circle with radius

var radiusNum =document.querySelector('#area-input');
var radiusButton = document.querySelector('#area-button');

function calculateArea(){
var radiusInputNum = radiusNum.value;
radiusInputNum = radiusInputNum * radiusInputNum * Math.PI;
console.log(radiusInputNum);

var newAreaTag = document.createElement('p');
var newAreaText = document.createTextNode(radiusInputNum);
newAreaTag.appendChild(newAreaText);
calSolution.appendChild(newAreaTag);

}


radiusButton.addEventListener('click', calculateArea);
