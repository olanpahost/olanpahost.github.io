/*ЗАДАЧА 7 (DOM): Створіть кнопку і поле для вводу. При натисненні на кнопку записати у поле значення "Я текст в input".*/
function ex6() {
    alert('Hurray!!!');
}
var button, inp;
button = document.querySelectorAll('button');

button[0].onclick = ex6;
/*ЗАДАЧА 7 (DOM): Створіть кнопку і поле для вводу. При натисненні на кнопку записати у поле значення "Я текст в input".*/
inp = document.querySelectorAll('input');
function inputText() {
    inp[0].value = "Я текст в input";
}
button[1].onclick = function () {
    inputText();
    this.innerHTML = "Useless button";
};
/*ЗАДАЧА 8 (DOM): Створіть кнопку і 2 поля для вводу.
 При натисненні на кнопку значення в першому полі записати у друге поле, а значення другого - у перше.
 При цьому текст кнопки має стати "Натиснена".*/

function exchange() {
    var y;
    y = inp[0].value;
    inp[0].value = inp[1].value;
    inp[1].value = y;
    var b = button[2];
    if (b.innerHTML == 'ex. N8') {
        b.innerHTML = 'pressed';
        b.style.backgroundColor = '#dc143c';
    } else {
        b.innerHTML = 'ex. N8';
        b.style.backgroundColor = '#004f4f';
    }
}
button[2].onclick = exchange;
/*ЗАДАЧА 9 (DOM): Створіть блок червоного кольору. При натисненні на нього змініть його колір на жовтий,
 а колір рамки на зелений.*/
var div = document.querySelector('.exc9');

div.onclick = function () {
    if (div.style.backgroundColor !== 'yellow') {
        div.style.backgroundColor = 'yellow';
        div.style.borderColor = '#567';
    }
    else {
        div.style.backgroundColor = '#dc143c';
        div.style.borderColor = '#100221';
    }
    ;
}




