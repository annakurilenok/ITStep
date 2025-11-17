function show1 (num1, num2) {
    if(num1 < 0) {
        return
    }else{
        console.log(`Число ${num1} и ${num2}`);
    show1 (num1 - 1, num2 - 1);
    }
}

// function show2 (num1, num2) {
//     show1 (num1, num2);
// }

// show2(2, 3);

show1(2,3);

function showNumbers(start, end) {
    // for(i = start; i <= end; i++){
    //     console.log(i);
    // }

    if(start > end) {
        return
    }else {
        console.log(start);
        showNumbers(start + 1, end);
    }
}

showNumbers(0, 10);

function changetLinkText () {
    let a = document.querySelector('a');

    a.innerText = 'Это ссылка на Google';

    console.dir(event);
}

let button = document.querySelector('button');
// button.onclick = changetLinkText;

// button.onclick = function() {
//     document.body.style.backgroundColor = 'red';
// }

button.onclick = function(event) {
    console.dir(event,target);
}

button.removeEventListener('click', changetLinkText);

button.addEventListener('click', changetLinkText)
button.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
button.onclick = function() {
    alert('Все выполнено!')
}
console.dir(button);

let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let div = document.getElementsById('text');
    div.remove();
})