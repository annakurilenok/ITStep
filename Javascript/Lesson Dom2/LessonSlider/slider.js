let images = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

function changeSlider() {
    if(currentImageIndex < 3) {
        currentImageIndex ++;
    } else {
        currentImageIndex = 0;
    }

    for(let i = 0; i < images.length; i++) {
        if(i == currentImageIndex) {
            images[i].classList.add('active')
        } else {
            images[i].classList.remove('active')
        }
    }
        
}

setInterval(changeSlider, 2000);