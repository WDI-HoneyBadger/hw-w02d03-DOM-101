var button1 = document.getElementById("lib-button");


button1.addEventListener('click', function(){

    var noun1 = document.getElementById('noun').value;

var adj = document.getElementById('adjective').value;

var name = document.getElementById('person').value;

var show = document.getElementById('story');


//Our full sentence
     var story = `${name} likes ${adj} ${noun1}`;

//Creating new tag
var para = document.createElement('p');

//Inserting text into new variable to append it later on with para
var newstory = document.createTextNode(story);

//Appending full sentence in the desired structure
para.appendChild(newstory);

//Appending the whole thing with <div>
show.appendChild(para);




});