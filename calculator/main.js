//var squareButton = document.getElementById('square-button');

var halfButton = document.getElementById('half-button');

var areaOfCircle = document.getElementById('area-button');

var squareInput = document.getElementById('square-input');



/*squareButton.addEventListener('click', function(){

    
    var takeNumS = document.getElementById('square-input').value;
  
     var pTagS = document.createElement('p');

     var squaredNum = takeNumS * 2;

     var show1 = document.getElementById('show1');


     var appendSquare = document.createTextNode(squaredNum);
     
     pTagS.appendChild(appendSquare);

     show1.appendChild(pTagS);


});*/

var sol = document.getElementById('solution');

//On Change Function
function SquareNumber(){


    var takeNumS = document.getElementById('square-input').value;
  
     var pTagS = document.createElement('p');

     var squaredNum = takeNumS * 2;

     


     var appendSquare = document.createTextNode(squaredNum);
     
     pTagS.appendChild(appendSquare);

     sol.appendChild(pTagS);

}


 function HalfNumber(){

    var takeNumH = document.getElementById('half-input').value;

    var pTagH = document.createElement('p');

    var halfNum = (takeNumH / 2).toPrecision();



    var appendHalf = document.createTextNode(halfNum);

    pTagH.appendChild(appendHalf);

    sol.appendChild(pTagH);
    
 }


 function AoC(){

    var takeNumCircle = document.getElementById('area-input').value;

    var pTagC = document.createElement('p');

    var timeCircle = takeNumCircle * 3.14;

    var areaAppend = document.createTextNode(timeCircle);

     pTagC = document.createElement('p');

    pTagC.appendChild(areaAppend);

    sol.appendChild(pTagC);

    console.log(takeNumCircle);



    

 }
