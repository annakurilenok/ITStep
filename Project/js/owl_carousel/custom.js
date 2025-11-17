let totalPages = 0;
let currentPageIndex = 1;

function setSliderPagination() {
   $('#slider-pagination').html(`${currentPageIndex} из ${totalPages}`);
}

$(document).ready(function(){
    let options = {
        items: 4,
        margin: 30,
        dots: false,
        slideBy: 4,
    }

//   $(".owl-carousel").owlCarousel(options);

  let owl = $('.owl-carousel');
  owl.owlCarousel(options);

  $('#slider-left').click(function(){
     owl.trigger('prev.owl.carousel');

     if(currentPageIndex > 1) {
      currentPageIndex --;
     }

     setSliderPagination();
  })

  $('#slider-right').click(function(){
     owl.trigger('next.owl.carousel');

     if(currentPageIndex < totalPages) {
        currentPageIndex ++;
     }

     setSliderPagination();

  })

  let totalCards = $('.owl-item').length;

  totalPages = Math.ceil(totalCards / options.items);

  setSliderPagination();

});

function validate() {
   let form = document.forms[0];
   let name = form.elements[0];
   let email = form.elements[1];

   let str = "Hi! My name is Anna. I'm 23 years old";

   let regex = /^[A-Za-zА-Яа-я]{2,20}\s*[A-Za-zА-Яа-я]{0,20}$/;
   

   let result = regex.test(str);

  
   console.log(result);
   

   return false;
}