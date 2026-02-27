// ===============================
// Qs1 - Create input and button
// ===============================

// Create elements
let input = document.createElement("input");
let btn = document.createElement("button");

// Set button text
btn.innerText = "Click me";

// Add elements to body
document.body.appendChild(input);
document.body.appendChild(btn);


// ===============================
// Qs2 - Add attributes
// ===============================

input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");


// ===============================
// Qs3 - Select button & style it
// ===============================

let button = document.querySelector("#btn");

button.style.backgroundColor = "blue";
button.style.color = "white";


// ===============================
// Qs4 - Create h1 element
// ===============================

let heading = document.createElement("h1");

heading.innerHTML = "<u>DOM Practice</u>";
heading.style.color = "purple";

document.body.appendChild(heading);


// ===============================
// Qs5 - Create paragraph
// ===============================

let para = document.createElement("p");

para.innerHTML = "Apna College <b>Delta</b> Practice";

document.body.appendChild(para);