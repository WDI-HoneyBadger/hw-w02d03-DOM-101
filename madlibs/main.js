console.log('hey');

var inputeOne = document.querySelector('#noun').value ;
var inputtwo = document.querySelector('#adjective').value;
var inputThree = document.querySelector('#person').value;


var button = document.querySelector('#lib-button');
var story = document.querySelector('#story');

function makeMadLib (){
    console.log(inputeOne.value + inputtwo.value + inputThree.value);
}
button.addEventListener('click', makeMadLib)



