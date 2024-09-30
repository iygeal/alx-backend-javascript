// Using ES6  syntax

// Arrow function
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Template literals
console.log(greet('Node with Babel'));

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal('Dog');
dog.speak();
