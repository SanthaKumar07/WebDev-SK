// Function Declaration
function sayHello(username) {
    console.log(`Hello ${username}`);
  }
  
  sayHello("SK");
  
  // Function Expressions
  const greetings = function (user) {
    console.log(`Hello ${user}`);
  };
  
  greetings("Doe");
  
  // -------------------------
  console.log(x); // ERROR
  let x = 10;