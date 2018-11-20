var buttonInput = document.querySelector('#lib-button');
var story = document.querySelector('#story');
function makeMadLib() {
    // var noun = document.getElementById("noun");
    var person = document.querySelector("person").value;
    var adjective = document.querySelector("adjective").value;
    var noun = document.querySelector("noun").value;
    noun.innerHTML = noun + " really " + adjective + "pink" + noun;
  }

  console.log(noun);

