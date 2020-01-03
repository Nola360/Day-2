// Concatenation 
const firstName = "Huey ";
const middleName = "P. "
const lastName = "Newton";
const age = 66;

console.log(firstName + middleName + lastName);

// Append

val = "Huey P. ";
// Will append newton to heuy instead of overwriting it
val += "Newton";

console.log(val);

val = "Hi, my name is " + firstName + middleName + lastName + " and I am " + age + ".";

console.log(val);

// Escaping

val = "That\'s awesome, I can\'t wait";
console.log(val);

// Length Property ( ()'s are not needed in properties)
val = firstName.length;
console.log(val);

// Concat Method

val = firstName.concat("", lastName);
console.log(val);

// Changing case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

console.log(val);

// Select a charater of string
val = firstName[2];
console.log(val);

// Indexof();
val = firstName.indexOf('y');
val = lastName.lastIndexOf('w');
console.log(val);


// CharAt() - opposite of indexOf
val = firstName.charAt('3');
console.log(val);

// Get last Character
val = lastName.charAt(lastName.length - 2);
console.log(val);

// Substring() - takes the first few charaters basted on parameter
val = firstName.substring(0, 4);
console.log(val);

// Slice() - takes the first few charaters basted on parameter
val = lastName.slice(0, -4);
console.log(val);

// Split() - splits string into an array based on a separator
const str = "Hello there my name is Huey";
val = str.split(' ');
console.log(val);

const tag = "web development, electric guitar, writing, performing";
val = tag.split(',');
console.log(val);

// replace()
val = str.replace('Huey', "Malcolm.");
console.log(val);

// Includes()
val = str.includes('Huey');

console.log(val);