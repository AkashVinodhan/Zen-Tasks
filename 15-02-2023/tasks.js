

//Resume in JSON format Q-2

let resume=
{

    "basics":
    {
      "name": "Akash V",
      "email": "akashvinodhan@gmail.com",
      "phone": "88xxxxxxxx",
      "location": {
        "address": "No.X, Postal Road, Y street",
        "city": "Coimbatore",
        "state": "Tamilnadu",
        "postalCode": 641017,
        "country": "India"
      },
      "profiles": 
        {
          "github":"https://github.com/AkashVinodhan"
        }
      
    },
    
    "education": 
      {
        "college": "Sri Ramakrishna College Of Engineering",
        "university" : "Anna University",
        "department": "BE Aeronautical ENginnering",
        "batch" : "2017-2021",
        "gpa": 8.16,
      },
    
    "languages": 
      {
        "language": "Tamil, English, Malayalam"
      },
    
    "interests": 
      {
        "hobbies": "Football, F1, Aviation",
      }
    
  }
let myJSON = JSON.stringify(resume);
console.log(myJSON);



// Iterating over a JSON Q-1 *************************************

let myJSON2 = 
{
    "name" : "Akash",
    "age" : 22,
    "phone" : "88xxxxxxx",
    "location" : "Coimbatore"
}

//Traditional for loop

console.log(myJSON2.length)
for(let i=0;i<myJSON2.length;i++){
    console.log(myJSON2[0].name)
    console.log(myJSON2[0].age)
    console.log(myJSON2[0].phone)
    console.log(myJSON2[0].location)
}

//forEach

let info = Object.keys(myJSON2);
info.forEach(element => {
    console.log(`${element} : ${myJSON2[element]}`)
});

//for..in

for(let i in myJSON2){
    console.log(myJSON2[i])
}

//for..of

for(let i of info){
    console.log(i+":"+ myJSON2[i])
}