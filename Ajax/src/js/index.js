import $ from 'jquery';
import '../scss/index.scss';

let conn = new XMLHttpRequest();

conn.onerror = function(){
  console.log('Нет соединения с сервером');
};

conn.onload = function() {
  console.log(this);

  if(this.status !== 200) {
    console.log(`Получение стутс ответа ${this.status}. Ошибка`);
    return;
  }

  renderBeerCard(this.response)
  
  //console.log(this.response); //json

  //let beer = JSON.parse(this.response);
  //console.log(beer);
}

setInterval(() => {
  conn.open('GET', 'https://punkapi.online/v3/beers/random');
  conn.responseType = 'json';
  conn.send();
}, 5000);

function renderBeerCard(beer) {
  const card = $('.card');
  let beer_html = `<div>
                        <p>"${beer.name}" </p>
                        <img src="ссылка${beer.image}" alt="">
                      </div>`


      card.html(beer_html);
}


// function renderImg(beer) {
//   document.body.innerHTML = <img style=""
// }