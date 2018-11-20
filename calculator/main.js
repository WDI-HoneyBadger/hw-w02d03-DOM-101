// console.log('js');

var setSolution = document.querySelector('#solution');

// square
var squareButton = document.querySelector('#square-button');

function getSquare(){
    var getNum = document.querySelector('#square-input').value;
    var newPTag = document.createElement('p');
    var square = getNum * getNum;
    var result =  document.createTextNode(`The square of the number ${getNum} = ${square}`);

    newPTag.appendChild(result);
    setSolution.appendChild(newPTag);
}

squareButton.addEventListener('click', getSquare);


// half
var halfButton = document.querySelector('#half-button');

function getHalf(){
    var getNum = document.querySelector('#half-input').value;
    var newPTag = document.createElement('p');
    var half = getNum / 2;
    var result =  document.createTextNode(`The half of the number ${getNum} = ${half}`);

    newPTag.appendChild(result);
    setSolution.appendChild(newPTag);
}

halfButton.addEventListener('click', getHalf);



// area of circle 
var areaButton = document.querySelector('#area-button');

function getArea(){
    var getNum = document.querySelector('#area-input').value;
    var newPTag = document.createElement('p');
    var area = Math.floor(getNum * getNum * Math.PI);
    var result =  document.createTextNode(`The area of circle with radius ${getNum} = ${area}`);

    newPTag.appendChild(result);
    setSolution.appendChild(newPTag); 
}

areaButton.addEventListener('click', getArea);