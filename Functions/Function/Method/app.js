// a method is a function that is associated with an object. It allows objects to perform actions or provide functionalities.

const person = {
    name: "SK",
    age: 25,
    greet: function greet() {
      return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
    },
  };
  
console.log(person.greet());
  