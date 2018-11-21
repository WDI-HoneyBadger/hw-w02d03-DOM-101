//Square this number
var setSolution = document.querySelector('#solution');
 // select the butten
var squareButton = document.querySelector('#square-button');
// make a function that takes the number from the user 
function FinalSquare(){
    var getNum = document.querySelector('#square-input').value;
    var newPTag = document.createElement('p');

    // value of a square is 
    var square = (getNum * getNum);
    var result =  document.createTextNode(`square of a number ${getNum} = ${square}`);
    //var square = getNum * getNum;
    newPTag.appendChild(result);
    setSolution.appendChild(newPTag);
}
 squareButton.addEventListener('click', FinalSquare);



 // Half this number
var halfButton = document.querySelector('#half-button');
 function FinalHalf(){
    var getNum = document.querySelector('#half-input').value;
    var newPTag = document.createElement('p');
    var half = (getNum / 2);
    var result =  document.createTextNode(`half of a number ${getNum} = ${half}`);
     newPTag.appendChild(result);
    setSolution.appendChild(newPTag);

}
 halfButton.addEventListener('click', FinalHalf);


 // Calculate area of circle with radius
var areaButton = document.querySelector('#area-button');
 function FinalArea(){
    var getNum = document.querySelector('#area-input').value;
    var newPTag = document.createElement('p');
    var area = (Math.floor(getNum * getNum * Math.PI));
    var result =  document.createTextNode(`area of circle ${getNum} = ${area}`);
     newPTag.appendChild(result);
    setSolution.appendChild(newPTag); 
}
 areaButton.addEventListener('click', FinalArea); 
