/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 8: Inheritance, Methods and Composition - Task 3
  Student Name: sumit singh
  Roll Number: 2510303522
*/

class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return `Car starts with ${this.engine.power} HP`;
    }
}

const car = new Car(150);
console.log(car.start());
