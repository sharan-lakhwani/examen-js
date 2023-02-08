function passwordSecurer(str) {
  var newStr = str.replace(/a/g, "@");
  newStr = newStr.replace(/e/g, Math.floor(Math.random() * 10) + 1);
  newStr = newStr.replace(/i/g, Math.floor(Math.random() * 10) + 1);
  newStr = newStr.replace(/o/g, Math.floor(Math.random() * 10) + 1);
  newStr = newStr.replace(/u/g, Math.floor(Math.random() * 10) + 1);
  while (newStr.length < 8) {
    newStr += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  return newStr;
}

function init() {
  var input = document.createElement("input");
  input.type = "text";
  input.id = "input";
  document.body.appendChild(input);
  var button = document.createElement("button");
  button.innerHTML = "Transform";
  button.onclick = function () {
    var output = document.createElement("div");
    output.innerHTML = passwordSecurer(document.getElementById("input").value);
    document.body.appendChild(output);
  };
  document.body.appendChild(button);

  // btn azul
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.style.border = "none";
  button.style.fontSize = "20px";
  button.style.fontWeight = "bold";
  button.style.margin = "10px";
}

// espacio entre contras
var output = document.getElementsByTagName("div");
for (var i = 0; i < output.length; i++) {
  output[i].style.padding = "10px";
}

init();
