const calc = {
    summ: function(a,b) {
        console.log(a + b);
        return this;
    },

    sub: function (a,b) {
        console.log(a - b);
        return this;
    },

    nul: function (a,b) {
        console.log(a * b);
        return this;
    },

    div: function (a,b) {
       if(b == 0) {
        console.log(0);
       } else {
        console.log(a / b);
    }
        return this;
}

}

console.log(calc.summ(2,2));

let r = calc.summ(2,2);
r.div(2,2).div(2,2).nul(2,2);

// function $(selector){
//     return document.querySelector(selector)
// }