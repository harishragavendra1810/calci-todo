let displayBoxId = document.getElementById("displayBox");

let arr = [];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btndot = document.getElementById("btndot");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("divide");
let result = document.getElementById("ans");
let clear = document.getElementById("clearbtn");
let num;
btn1.onclick = function() {
    displayBoxId.value += "1";
    arr.push("1");
}
btn2.onclick = function() {
    displayBoxId.value += "2";
    arr.push("2");
}
btn3.onclick = function() {
    displayBoxId.value += "3";
    arr.push("3");
}
btn4.onclick = function() {
    displayBoxId.value += "4";
    arr.push("4");
}
btn5.onclick = function() {
    displayBoxId.value += "5";
    arr.push("5");
}
btn6.onclick = function() {
    displayBoxId.value += "6";
    arr.push("6");
}
btn7.onclick = function() {
    displayBoxId.value += "7";
    arr.push("7");
}
btn8.onclick = function() {
    displayBoxId.value += "8";
    arr.push("8");
}
btn9.onclick = function() {
    displayBoxId.value += "9";
    arr.push("9");
}
btn0.onclick = function() {
    displayBoxId.value += "0";
    arr.push("0");
}
btndot.onclick = function() {
    displayBoxId.value += ".";
    arr.push(".");
}
let operator = "";
add.onclick = function() {
    num = 0;
    arr.push("+");
    displayBoxId.value += "+";
    operator = "+";
}
sub.onclick = function() {
    num = 0;
    arr.push("-");
    displayBoxId.value += "-";
    operator = "-";
}
mul.onclick = function() {
    num = 1;
    arr.push("*");
    displayBoxId.value += "*";
    operator = "*";
}
div.onclick = function() {
    num = 1;
    arr.push("/");
    displayBoxId.value += "/";
    operator = "/";
}
let str = "";
clear.onclick = function() {
    displayBoxId.value = "";
    str = "";
    arr=[];

}


result.onclick = function() {
    for (let val of arr) {
        if (val === "+") {
            num += parseFloat(str);
            str = "";
        } else if (val === "-") {
            num = parseFloat(str) - num;
            str = "";
        } else if (val === "*") {
            num *= parseFloat(str);
            str = "";
        } else if (val === "/") {
            num = parseFloat(str) / num;
            str = "";
        } else {
            str += val;
            console.log(str);
        }
    }



    if (operator === "+") {
        num += parseFloat(str);
        str = "";
    } else if (operator === "-") {
        num -= parseFloat(str);
        str = "";
    } else if (operator === "*") {
        num *= parseFloat(str);
        str = "";
    } else if (operator === "/") {
        num /= parseFloat(str);
        str = "";
    }

    arr.splice(0, arr.length);
    displayBoxId.value = num;
    arr.push(num);
    if (displayBoxId.value === "undefined") {
        displayBoxId.value = str;
    }
}