console.log('js connected');


var nouninput = document.querySelector('#noun');
console.log(nouninput);
var adjectiveinput = document.querySelector('#adjective');
console.log(adjectiveinput);
var personinput = document.querySelector('#person');
var button = document.querySelector('#lib-button');
var result = document.querySelector('#story');

function makeMadLib(){

    // get the value of the input
    var noun1 = nouninput.value;
    console.log(noun1);
    var adjective1 = adjectiveinput.value;
    console.log(adjective1);
    var person = personinput.value;
    console.log(person);


    // create element P
    var elemntP = document.createElement('p');

    var newText = document.createTextNode(`${noun1} ${adjective1} ${person}`);
    elemntP.appendChild(newText);
    result.appendChild(elemntP);
};

button.addEventListener('click', makeMadLib);