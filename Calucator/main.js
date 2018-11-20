//part1
var theSulotion = document.querySelector('#solution');
console.log(theSulotion);

var squareButton = document.querySelector('#square-button');
console.log(squareButton);

var squareNum = document.querySelector('#square-input');
console.log(squareNum);

function sqrNum (){
    var firstNum = squareNum.value;
    var theSquare = (firstNum * firstNum);
    console.log(theSquare);

    tagPharagraph = document.createElement('p');
    theSulotion.appendChild(tagPharagraph);

}
squareButton.addEventListener('click', sqrNum); 



//part2

var theSulotion = document.querySelector('#solution');
console.log(theSulotion);

var halfButton = document.querySelector('#half-button');
console.log(halfButton);

var halfNum = document.querySelector('#half-input');
console.log(halfNum);

function halfTheNumber (){
    
var halfAnswer = halfAnswer.value / 2;

var addP = document.createElement('p');

var addText = document.createTextNode(halfAnswer);

halfSolution.appendChild(addP);
halfSolution.appendChild(addText);

}
halfButton.addEventListener('click', halfTheNumber);  

//part 3

var theSulotion = document.querySelector('#solution');
console.log(theSulotion);
var areaButton = document.querySelector('#area-button');
var areaRadius = document.querySelector('#area-input');
console.log(areaButton);

function areaR (){
var areaAnswer = document.querySelector("#area-input");
    
var areNum = areaAnswer.value;
var answerValue = Math.round(Math.PI * Math.pow(areNum, 2) * 100) / 100 
    
var addP = document.createElement('p');
var addText = document.createTextNode(answerValue);
    
areaButton.appendChild(addP);
areaButton.appendChild(addText);
    
}
areaButton.addEventListener('click', areaR);  













