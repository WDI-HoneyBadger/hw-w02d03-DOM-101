

var button = document.querySelector('#lib-button');
var input1 = document.querySelector('#noun');
var input2 = document.querySelector('#adjective');
var input3 = document.querySelector('#person');

var story = document.querySelector('#story');


function makeMadLib(){
    console.log('clickity click');
    var userInput = input1.value + ' ' + input2.value + ' ' + input3.value;
    console.log('input value is ', userInput);

    var newPTag = document.createElement('p');
    var newPTagText = document.createTextNode(userInput);
  
    newPTag.appendChild(newPTagText);
    story.appendChild(newPTag);
}


button.addEventListener('click', makeMadLib);