// //***Q-1.a Get all the countries from the Asia continent /region using the Filter function***

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  let res = xhr.response;
  let filteredRes = res.filter((value) => value.region == "Asia");
  console.log(filteredRes);
};

// //***Q-1.b Get all the countries with a population of less than 2 lakhs using Filter function***

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://restcountries.com/v3.1/all");
xhr2.responseType = "json";
xhr2.send();

xhr2.onload = function () {
  let res = xhr2.response;
  let filteredRes = res.filter((value) => value.population < 200000);
  console.log(filteredRes);
};

// //***Q-1.c Print the following details name, capital, flag using forEach function***

let xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://restcountries.com/v3.1/all");
xhr3.responseType = "json";
xhr3.send();

xhr3.onload = function () {
  let res = xhr3.response;
  res.forEach((element) => {
    console.log(
      `Name : ${element.name.common}, Capital : ${element.capital}, Flag: ${element.flag}`
    );
  });
};

// ***Q-1.d Print the total population of countries using reduce function***

let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://restcountries.com/v3.1/all");
xhr4.responseType = "json";
xhr4.send();

xhr4.onload = function () {
  let res = xhr4.response;
  let totalPop = res.reduce((sum, current) => {
    return (sum += current.population);
  }, 0);
  console.log(totalPop);
};

// ***Q-1.e Print the country which uses US Dollars as currency.***

let xhr5 = new XMLHttpRequest();
xhr5.open("GET", "https://restcountries.com/v3.1/all");
xhr5.responseType = "json";
xhr5.send();

xhr5.onload = function () {
  let res = xhr5.response;
  res.forEach((element) => {
    if (element.currencies != undefined) {
      if (Object.keys(element.currencies) == "USD")
        console.log(element.name.common);
    }
  });
};
