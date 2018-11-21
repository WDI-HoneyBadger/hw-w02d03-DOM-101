//.........Calculate area of circle with radius:..........//



var noun = document.querySelector('#noun');
var adjective = document.querySelector('#adjective');
var person = document.querySelector('#person');
var button = document.querySelector('#lib-button');
var story = document.querySelector('.story');

function makeMadLib(){
  console.log('clickity click');

  var sumvalue = person.value+' ' +adjective.value +' '+ noun.value;
  console.log (sumvalue)


var newPTag = document.createElement('p');
  var newPTagText = document.createTextNode(sumvalue);

  newPTag.appendChild(newPTagText);
  story.appendChild(newPTag);
}

button.addEventListener('click', makeMadLib);