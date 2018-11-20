var button = document.querySelector("#lib-button");

var makeMadLib = function(){
    var noun = document.querySelector("#noun").value;
    var adj = document.querySelector("#adjective").value;
    var personName = document.querySelector("#person").value;

    var resultText = document.createTextNode(`${personName} used to be addicted to ${adj} ${noun}, but then they took an arrow to the knee.`);
    // console.log(resultText);

    var resultElement = document.createElement("p");
    resultElement.appendChild(resultText);

    // resultElement.innerHTML = `${personName} really likes ${adj} ${noun}. YAY!`
    // console.log(resultElement);
    
    var resultBox = document.querySelector("#story");
    resultBox.appendChild(resultElement);

}

button.addEventListener("click", makeMadLib)