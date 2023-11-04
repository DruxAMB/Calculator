var inp = document.createElement("input");
document.getElementById("display").appendChild(inp);
var ele = document.getElementById("item");

function clickAC(){
    ele.innerHTML = inp.value = "";
}
function clickDE(){
    ele.innerHTML = inp.value = inp.value.slice(0, -1);
}
function clickPercent(){
    ele.innerHTML = inp.value += "%";
}
function clickDivide(){
    ele.innerHTML = inp.value += "/";
}
function clickSeven(){
    ele.innerHTML = inp.value += 7;
}
function clickEight(){
    ele.innerHTML = inp.value += 8;
}
function clickNine(){
    ele.innerHTML = inp.value += 9;
}
function clickX(){
    ele.innerHTML = inp.value += "*";
}
function clickFour(){
    ele.innerHTML = inp.value += 4;
}
function clickFive(){
    ele.innerHTML = inp.value += 5;
}
function clickSix(){
    ele.innerHTML = inp.value += 6;
}
function clickSubtract(){
    ele.innerHTML = inp.value += "-";
}
function clickOne(){
    ele.innerHTML = inp.value += 1;
}
function clickTwo(){
    ele.innerHTML = inp.value += 2;
}
function clickThree(){
    ele.innerHTML = inp.value += 3;
}
function clickPlus(){
    ele.innerHTML = inp.value += "+";
}
function clickDot(){
    ele.innerHTML = inp.value += ".";
}
function clickZero(){
    ele.innerHTML = inp.value += 0;
}
function clickEqual(){
    ele.innerHTML = inp.value = eval(inp.value);
}