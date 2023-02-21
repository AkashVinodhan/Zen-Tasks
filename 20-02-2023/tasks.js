// Q-1 Movie Class **************************************
//a,b

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    if (rating == undefined) {
      this.rating = "PG";
    }
  }
}

//c

let getpg = (arr) => {
  return arr.filter((film) => film.rating == "PG");
};

let film1 = new movie("Skyfall", "Eon Productions");
let film2 = new movie("Spectre", "Paramount Pictures", "PG13");
let film3 = new movie("Dune", "Disney", "R");
let film4 = new movie("Dunkirk", "Warner Bros", "PG");
let film5 = new movie("Tenet", "Syncopy", "PG");

console.log(getpg([film1, film2, film3, film4, film5]));

//d
let film = new movie("Casino Royale", "Eon Productions", "PG13");

// Q-2  Class Circle from the given UML******************************************************************

class Circle {
  radius = 1.0;
  color = "Red";

  constructor(radius, color) {
    if (typeof radius !== "undefined") {
      this.radius = radius;
    }
    if (typeof color !== "undefined") {
      this.color = color;
    }
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Radius: ${this.radius}, Color: ${this.color}`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let c1 = new Circle();
c1.setRadius(2);
c1.setColor("Yellow");
console.log(c1.toString());
console.log(c1.getCircumference());

// Q-3 Person class to hold all the details

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  display() {
    return `Name:${this.name}, Age: ${this.age}, City:${this.city}`;
  }
}

let Person1 = new Person("Abinav", 25, "Chennai");
console.log(Person1.display());

// Q-4 write a class to calculate the uber price.

class uber {
  constructor(name, distance, time) {
    this.name = name;
    this.distance = distance;
    this.time = time;
  }
  getPrice() {
    let baseFare = 48;
    let total = baseFare + this.time * 1 + this.distance * 14.7;
    return `Ride fare : ${total} Rupees`;
  }
}

let ride1 = new uber("Ajay", 10, 30);
console.log(ride1.getPrice());
