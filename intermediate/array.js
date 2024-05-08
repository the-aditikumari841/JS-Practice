// () : parenthesis
// {} : Braces
// [] : brackets

var countries = ["India", "USA" , "Japan" , "Russia"];

var states = new Array("Rajasthan" , "Delhi" , "Mumbai" , "Assam");

console.log(states);

console.log(states[1]);

console.log(states.length);

states[0] = "Punjab";

console.log(states);

var user = ["hit", "hit@lco.dev", 3, 34, true];

console.log(user);

user.pop();
console.log(user);

user.pop();
console.log(user);
user.unshift("NEW UNSHIFT");
console.log(user);
user.shift();
console.log(user);


console.log(user.indexOf(3));

console.log(user.indexOf("newyy"));

console.log(Array.from("hit1234"));

