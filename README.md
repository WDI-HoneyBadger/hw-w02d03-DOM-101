# HW-W02DD03 - Events

## Mad Libs

Start with this webpage, which has several input elements and a button:
```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title></title>
 </head>
 <body>
 
 <h1 style="background-color: blue" >Mad Libs</h1>
 
 <ul>
  <li >Noun: <input type="text" id="noun">
  <li>Adjective: <input type="text" id="adjective">
  <li>Someone's Name: <input type="text" id="person">
 </ul>
 
 <button id="lib-button">Lib it!</button>
  
 <div id="story" style="height: 200px;"></div>
  
 </body>
</html>
```

- Create a new Javascript file and link to it with a script tag at the bottom.
- Add an event listener to the button so that it calls a makeMadLib function when clicked.
- In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

## Calculator

Start with this webpage, which has inputs and buttons for things to calculate: 
```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculator</title>
</head>
<body>

  <label>Square this number:
    <input type="number" id="square-input" size="2">
  </label>
  <button id="square-button">Calculate</button>
  <br><br>
  
  <label>Half this number:
    <input type="number" id="half-input" size="2">
  </label>
  <button id="half-button">Calculate</button>
  <br><br>
  
  <label>Calculate area of circle with radius:
    <input type="number" id="area-input" size="2">
  </label>
  <button id="area-button">Calculate</button> 
  <br><br>
  <div id="solution"></div>

  
</body>
</html>
```
- Create a new Javascript file and link to it with a script tag at the bottom.
- For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
- Bonus: respond to key presses so that the user doesn't have to click the button.
