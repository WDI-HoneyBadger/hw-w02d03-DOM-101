// select the elements
var nounInput = document.querySelector('#noun');
var adjectiveInput = document.querySelector('#adjective');
var personInput = document.querySelector('#person');
var button = document.querySelector('#lib-button');
var output = document.querySelector('#story')

// add event listoner to button
button.addEventListener('click', yourStory);

function yourStory() {
    // Create New P tag inside story div
    var tagPStory = document.createElement('p');

    // get the inpute value from the input tags
    var userNoun = nounInput.value;
    var userAdjInput = adjectiveInput.value;
    var personName = personInput.value;

    var yourStory = document.createTextNode(`${userNoun} really ${userAdjInput} pink ${personName}`);
    
    // append the value to the output story div
    tagPStory.appendChild(yourStory);
    output.appendChild(tagPStory);
}