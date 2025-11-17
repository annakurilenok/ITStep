// Task 1
let n = 5;

let m = 10;

console.log((m>n)?m:n); //если m больше n выведи m - иначе n

// Task 2

let a = 5;

console.log((a%5==0)?"Кратно пяти":"Не кратно пяти");

// Task 3

let name = "Mars";
console.log((name=="Земля"||name=="земля")?"Привет, землянин!":"Привет, инопланетянин!");

// Циклы

/*let d = +promt("Введите число больше 2");

while(d < 2) {
    d = +promt("Неверное число. Введите число больше 2");
}

let f = +promt("Введите степень числа");

console.log(`Результат равен ${d**f}`);*/

// Task 1

let count = 10;

while(count > 0) {
    console.log('#');
    //console.log(`${count}#`)
    count--;
}

//Task 2

let s = 4;

while(s >= 0) {
    console.log(`Число - ${s}`);
    s--;
}

// Task 3

let num = 3;

let degree = 4;

let result = 1;

let i = 1;
while(i <= degree) {
    result = result * num; 
    console.log(`Промежуточный результат - ${result}`);
    i++;
}

console.log(`Результат - ${result}`);

// Task 5

let h = 5;

result = 1;

i = 1;

while(i <= h) {
    result = result * i;
    i++;
}

console.log(`Факториал числа ${h} равен ${result}`);

//

num = 45;

do {
    result = +prompt("Я загадал число, отгадай его");
} while(result != num);

//

for(let j = 1; j <=10; j+=2) {
    console.log(j);
}

 num = 1000;

//

do {
    num = num / 2;
}while(num >= 50);

console.log(num);

//Task 6

let start = 10;

let end = 150;

for(let i = start; i <= end; i+=4) {
    console.log(`Элемент - ${i}`);
}

