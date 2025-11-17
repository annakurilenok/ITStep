let stepen = 2;


function summ(a, b = 10) {
    //let result = a + b;
    let result = (a + b) ** stepen;

    return result;
}


let number1 = 34;
let number2 = 45;

let rrr = summ(number1, number2);

console.log(rrr);

console.log(summ(number1, number2) ** stepen);

// Task 1

function num(c, d) {
    return(c < d) ? с : d;

   /* if(c < d) {
        return c;
    } else {
        return d;
    }*/
}

console.log(num(3, 4));

// Task 2
let s = 10;

function numb(s) {
    let result = s ** stepen;
}