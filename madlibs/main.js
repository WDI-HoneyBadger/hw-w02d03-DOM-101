var nounObj = document.querySelector('#noun');
var adjObj = document.querySelector('#adjective');
var nameObj = document.querySelector('#person');
var libButton = document.querySelector('#lib-button');
var resultStory = document.querySelector('#story');

function libIt () {

    var storyInput = `${nameObj.value} has been taking the ${adjObj.value} ${nounObj.value}. This person is at new level !!!`;

    var newP = document.createElement('p');

    var inputText = document.createTextNode(storyInput);

    newP.appendChild(inputText);

    resultStory.appendChild(newP);

}

libButton.addEventListener('click', libIt);