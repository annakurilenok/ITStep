let div = document.querySelector('.container');
div.addEventListener('click', function(event){
    this.style.borderColor = 'red';
    if(event.target.tagName.toLowerCase() == 'button'){
        event.target.classList.toggle('animated');
    }
});

let button = document.querySelector('button');
button.addEventListener('click', function(event){
    event.stopPropagation();
    this.parentElement.style.backgroundColor = 'pink';
});