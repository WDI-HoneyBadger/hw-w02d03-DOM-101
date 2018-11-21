// var list=document.getElementById("clom1");
// var items=document.getElementsByTagName("li");
// another solve
// for(var i=0;i<=items.list;i++){
//     i=items.button;
//     console.log(i);
// }

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }




// // function clicke(){
// //     console.log("hh");
// // }

// // var valuebutton=document.querySelector("#lib-button");
// // valuebutton.addEventListener("click",clicke);

var button = document.querySelector(‘#lib-button’)
var story = document.querySelector(‘#story’)

var inputOne = document.querySelector(‘#noun’)
var inputTwo = document.querySelector(‘#adjective’)
var inputThree = document.querySelector(‘#person’)

function makeMadLib (){
   var valueOne = inputOne.value; // FIND the USER INPUT
   var valueTwo = inputTwo.value;
   var valueThree = inputThree.value;

   var putAll = valueOne +' ' + valueTwo +' ' +valueThree;


var newPTag = document.createElement(‘p’);
var newPTagText = document.createTextNode(putAll);

newPTag.appendChild(newPTagText);
story.appendChild(newPTag);
}

button.addEventListener(‘click’,makeMadLib );
