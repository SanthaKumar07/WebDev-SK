// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {Type:"Hyundai", Model:"Venue", Colour:"White"};

console.log(typeof car);

console.log(car.Type);
console.log((car.Type="Toyota"));
console.log(car.Model);
console.log((car.Model="Glanza"));

console.log((car.wheels=4));

console.log(car);
