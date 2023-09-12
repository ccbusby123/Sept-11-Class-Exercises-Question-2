class Person {
constructor (name, age){
  this.name = name
  this.age = age
}
greet() {
  console.log(`Hello ${this.name}`);
}

}

let person1 = new Person("Tom", 30);
let person2 = new Person ("Mike", 20);
person1.greet();
person2.greet();