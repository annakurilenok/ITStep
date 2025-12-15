import $ from 'jquery';

const bgColors = ['black', 'red', 'yellow', 'pink', 'purple'];

function chageBgColor() {
    const rand = () => {
       return Math.floor(Math.random() * (bgColors.length - 1));
    }

    console.log(rand);

    $('[data-colored]').each(function(){
        $(this).css('backgroundColor', bgColors[rand()]);
    });
}

setInterval(chageBgColor, 3000);