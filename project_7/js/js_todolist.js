// /*ЗАДАЧА 10 (DOM):Одна кнопка додає пункти в кінець списку, інша прибирає пункти з кінця списку.*/
var changeUl = document.querySelectorAll('.changeUl');
var childItem, childPlus;
var parent = document.querySelector('ul');


function AppendItem() {
    childPlus = document.createElement('li');
    parent.appendChild(childPlus);
    childItem = document.querySelectorAll("li");
    var text = document.createTextNode("Пункт " + (childItem.length));

    childItem[childItem.length - 1].appendChild(text);
}
function RemoveItem() {
    childItem = document.querySelectorAll("li");
    if (childItem.length) {
        parent.removeChild(childItem[childItem.length - 1]);
    }
}

changeUl[0].onclick = AppendItem;
changeUl[1].onclick = RemoveItem;

/*ЗАДАЧА 11 (DOM):Ускладнений варіант попередньої задачі.
 Одна кнопка додає пункти в початок списку. При чому доданий пункт має номер 1, у всіх решти пунктів номери зсовуються.
 Також для помічення доданих пунктів на початку вставляється зірочка.
 Друга кнопка видаляє пункти з початку списку. При чому знову ж таки нумерація змінюється.*/
//&#8727; - зірочка

function AppendBegin() {
    childItem = document.querySelectorAll("li");
    childPlus = document.createElement('li');
    text = document.createTextNode("\u002AПункт 1");
    childPlus.appendChild(text);
    parent.insertBefore(childPlus, childItem[0]);
    childItem = document.querySelectorAll("li");
    var i = 1;
    for (; i < childItem.length; i++) {
        var z = childItem[i].innerHTML;
        childItem[i].innerHTML = z.substring(0, z.indexOf(' ')) + ' ' + (i + 1);
    }
}
function RemoveBegin() {
    childItem = document.querySelectorAll("li");
    if (childItem.length) {
        parent.removeChild(childItem[0]);
        childItem = document.querySelectorAll("li");
        var i = 0;
        for (; i < childItem.length; i++) {
            var z = childItem[i].innerHTML;
            childItem[i].innerHTML = z.substring(0, z.indexOf(' ')) + ' ' + (i + 1);
        }
    }
}

changeUl[2].onclick = AppendBegin;
changeUl[3].onclick = RemoveBegin;