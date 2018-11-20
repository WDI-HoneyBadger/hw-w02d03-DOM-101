console.log('js connected');

// result for all opration

var result = document.querySelector('#solution');

// Square this number.

var squareinput = document.querySelector('#square-input');
var buttonSquare = document.querySelector('#square-button');

function squareNumber(){
    var x = squareinput.value;
    var square = x*x;
    console.log(x);
    var elemntP = document.createElement('p');

    var newNumber = document.createTextNode(`Square number is : ${square}`);
    elemntP.appendChild(newNumber);
    result.appendChild(elemntP);
}
buttonSquare.addEventListener('click', squareNumber);


// Half this number.

var halfinput = document.querySelector('#half-input');
var buttonHalf = document.querySelector('#half-button');


function halfNumber(){

    var x = halfinput.value;
    var half = x/2;
    console.log(half);
    var elemntP = document.createElement('p');

    var newNumber = document.createTextNode(`Half number is : ${half}`);
    elemntP.appendChild(newNumber);
    result.appendChild(elemntP);

};

buttonHalf.addEventListener('click', halfNumber);



// Calculate area of circle with radius.

var areainput = document.querySelector('#area-input');
var buttonarea = document.querySelector('#area-button');

function areaCircle(){

    var x = areainput.value;
    var areacircle = (x*x)*Math.PI;
    console.log(areacircle);
    var elemntP = document.createElement('p');

    var newNumber = document.createTextNode(`Area Circle number is : ${areacircle}`);
    elemntP.appendChild(newNumber);
    result.appendChild(elemntP);

};

buttonarea.addEventListener('click', areaCircle);