// console.log('js');

var story = document.querySelector('#story');

var buttonInput = document.querySelector('#lib-button');

function makeMadLib(){
    var noun = document.querySelector('#noun').value;
    var adjective = document.querySelector('#adjective').value;
    var person = document.querySelector('#person').value;

    console.log(noun);

    var newStory = document.createElement('p');
    // var adjective = document.querySelector('#adjective');
    var setContent = document.createTextNode(`${person} really likes ${adjective} ${noun}`);
    newStory.appendChild(setContent);
    story.appendChild(newStory);

}

buttonInput.addEventListener('click', makeMadLib);