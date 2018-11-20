// Create a new Javascript file and link to it with a
// script tag at the bottom.


// Add an event listener to the button so that it calls
// a makeMadLib function when clicked.

var nounStory = document.querySelector('#noun');
var adjStory = document.querySelector('#adjective');
var nameStory = document.querySelector('#person');
var button = document.querySelector('#lib-button');
var story = document.querySelector('#story')


// console.log(nounStory);
// console.log(adjStory);
// console.log(nameStory);

// In the makeMadLib function, retrieve the current values
// of the form input elements, make a story from them,
// and output that in the story div (like "Pamela really
// likes pink cucumbers.")

function storyAppend(){
    var userNoun = nounStory.value;
    // console.log(userNoun);
    var userAdj = adjStory.value;
    // console.log(userAdj);
    var userName = nameStory.value;
    // console.log(userName);

    var newStory = document.createElement('p');
    var newStoryTxt = document.createTextNode(`${userName} really likes ${userAdj} ${userNoun}`);
    
    newStory.appendChild(newStoryTxt);
    story.appendChild(newStory);

}
button.addEventListener("click", storyAppend);