/*let n = +promt ("Введите число");
let m = +promt ("Введите значение степени");

/*if(n==0) {
    alert("Результат операции равен 0");
}

if (n==1) {
    alert("Результат операции равен 1");
}

if (n > 1) {
    let result = n**m;

    alert(`Результат операции равен ${result}`);
}*/


/*if(n==0) {
    alert("Результат операции равен 0");
} else if (n==1) {
    alert("Результат операции равен 1");
} else (n==2) {
    alert("Не могу вычислить результат");
} else {
    let result = n**m;

    alert(`Результат операции равен ${result}`);
}



/*if (n >= 0) {
    let result = n**m;

    alert(`Результат операции равен ${result}`);
} else {
    alert("Вы ввели отрицательно число");
}*/

/*
>
<
>=
<=
==
===

let a = null;

alert(a <= 0);*/

/*let a = true;
alert(!a);

if (n <= 5 && <=10) {
    if(m<=2 || m >=4) {
        let result = n ** m;
        alert(`Результат операции равен ${result}`);
    }   
}*/

let name = prompt ("Какое «официальное» название JavaScript?");

if (name == "ECMAScript") {
    console.log("Верно!");
} else {
    console.log("Не знаете? ECMAScript!");
}

let number = +prompt ("Введите число");

if (number > 0) {
    console.log(1);
} else if (number < 0) {
    console.log(-1);
} else if (number == 0) {
    console.log(0);
}

console.log("Task 2");

//Task 2
let age = 34;

if(age > 0 && age <= 120) {
    console.log("Возраст верный");
} else {
    console.log("Возраст неверный");
}

if (age <=0 || age > 120) {
    console.log("Возраст неверный");
}

//Task 3

let num = -56;

if(num < 0) {
    num = -num; //--56 
}

console.log(num);

//Task 4
console.log("Task 4");

let hours = 32;
let minutes = 43;
let seconds = 56;

if( (hours < 0 || hours> 24) ||
    (minutes< 0 || minutes > 60) ||
    (seconds < 0 || seconds > 60) ) {
        console.log("Данные введены неверно");
}

//Task 5

let month = 2;

switch(month) {
    case 1:
        console.log("Январь");
    break;
    case 2:
        console.log("Февраль");
    break;
    case 3:
        console.log("Март");
    break;
    case 4:
        console.log("Апель");
    break;
    default:
        console.log("Месяц не определен");
}

//Task 6

let num1 = 45;

let num2 = 12;

let action = '*';

switch(action) {
    case '+':
        console.log(num1 + num2);
  break;
  case '-':
        console.log(num1 - num2);
  break;
  case '*':
        console.log(num1 - num2);
  break;
   case '/':
        console.log(num1 - num2);
  break;

  default:
    console.log("Такой операции нет");
}

let a = 1;
 let m = (a>0)?a:0;