function makeMadLib() {
    var myStory = document.getElementById("story");
    var person = document.getElementById("person").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
 myStory.innerHTML = person + " really likes " + adjective + "  " + noun ;
  } 

  var libButton = document.getElementById('lib-button');
  libButton.addEventListener('click', makeMadLib);
  