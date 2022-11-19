var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
var output4 = document.getElementById("output4");

//this is comment in JavaScript

input1.value="a new value"

btn1.onclick = function(){
  //this happens, if you press Button 1
  input2.placeholder="Please enter a number";
}

btn2.onclick = function(){
  //this happens, if you press Button 2
  output1.textContent="You pressed Button 2";
}
btn3.onclick = function(){
  output2.textContent="Have a nice day!";
}

btn4.onclick = function(){
  output3.textContent="Bye.See you soon";
}

btn5.onclick = function(){
  output4.textContent=":))";
}
