const dan = {
    success: true,
    timestamp: 1764611706,
    source: "USD",
    quotes: {USDEUR: 0.86055, 
            USDRUB: 77.721034, 
            USDBYN: 2.901379
    }
};

const courses = {
    USD: { USD: 1, EUR: 0, RUB: 0, BYN: 0 },
    EUR: { USD: 0, EUR: 1, RUB: 0, BYN: 0 },
    RUB: { USD: 0, EUR: 0, RUB: 1, BYN: 0 },
    BYN: { USD: 0, EUR: 0, RUB: 0, BYN: 1 }
}







console.log(fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN"));

let myHeaders = new Headers();
myHeaders.append("apikey", "wD4c7q07Q0Z6FRUskYWoWt2pTwrLUNan");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))