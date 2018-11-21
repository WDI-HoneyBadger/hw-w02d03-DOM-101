console.log('js connected!');
var squareInput = document.querySelector('#square-input');
var squarebutton = document.querySelector('#square-button');
var halfinput =document.querySelector('#half-input');
var halfbutton =document.querySelector('#half-button');
var areainput =document.querySelector('#area-input');
var areabutton =document.querySelector('#area-button');
var solution =document.querySelector('#solution');

console.log(squareInput);
console.log(halfInput);
console.log(areaInput);

//here
function calculatorNumber() {

    var num1=square-input.value;
   
     var cal= num1*num1;

   

console.log(userInput);

var newParagraph1 = document.createElement('p');
var paragraphText1 = document.createTextNode (`${num1}`);

newParagraph1.appendChild(paragraphText1);
solution.appendChild(newParagraph1);


}
areabutton.addEventListener('click', makeMadLib);
solution.addEventListener('click', makeMadLib);


function halfNumber() {
   
    var num1 = half-input.value;
    var cal= num1*num1;

console.log(userName);

var newParagraph2 = document.createElement('p1');
var paragraphText2 = document.createTextNode (`${userAdjective}`);

newParagraph2.appendChild(paragraphText2);
solution.appendChild(newParagraph2);

}

halfbutton.addEventListener('click', makeMadLib1);
solution.addEventListener('click', makeMadLib);


function areaNumber() {
    
    var num1 = area-input.value; 
    var array = [item1, item2,item3]; 


console.log(userAdjective);


var newParagraph3 = document.createElement('p3');
var paragraphText3 = document.createTextNode (`${userInput}`);

newParagraph3.appendChild(paragraphText3);
solution.appendChild(newParagraph3);

}

squarebutton.addEventListener('click', makeMadLib2);
solution.addEventListener('click', makeMadLib);



