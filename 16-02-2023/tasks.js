// Q-1********************************************************************************
// Comapare 2 JSON without order 

import _ from "lodash";
let obj1 = {name: "Akira", age: 27};
let obj2 = {age: 27, name: "Akira"};

console.log(_.isEqual(obj1, obj2));

//Q2*****************************************************************************************
// Use API Url and print all countries flags

let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';
xhr.send();

//Creating a div to put the images into
let div = document.createElement('div');
document.body.appendChild(div);
  
xhr.onload = function(){
    let res = xhr.response;
    res.forEach(element => {
        let flags = element.flags.png;
        let img = document.createElement('img');
        img.setAttribute('src',flags);
        div.appendChild(img);
    });
}


// Q3******************************************************************************************
//Use API Url to print name, region, subregions and populations

xhr.onload = function(){
  let res = xhr.response;
  res.forEach(element => {
      let name = element.name.common;
      let region = element.region;
      let subregion = element.subregion;
      let population = element.population;
      let p = document.createElement('p');
      p.innerText = `Name : ${name}, Region : ${region}, Subregion : ${subregion}, Population : ${population}`;
      div.appendChild(p);
  });
}

//************************************************************************************************** */