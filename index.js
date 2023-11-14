// const name = 'olasupoJenrola' /* STRING */
// const num = 67 /* NUMBER */

// const text = 'CHATGPT IS \'ALSO\' FOR MANY  \n THINGS \t SHA'
// const length = text.length
// console.log(length)
// console.log(text)

// const test = "A newline character is written like \"\\n\" ymll."
// console.log(test)
/* A newline character is written like
"\" */

// const maths = `half of 100 is ${100 / 2}`
// console.log(maths)

// console.log('aang' > 'zang')
// console.log("Aardvark" < "Zoroaster")

// console.log(undefined == undefined)

// console.log(false ? 1 : 2);

// let x = 16 + "Volvo";
// console.log(x)

/* NULL && UNDEFINED */

// let nully = ''
// console.log(typeof(nully))

// let undefined1;
// console.log(typeof(undefined1))

// console.log('1' + 5)
// console.log(1 + '5')

// console.log(null == null)

/* DATATYPES --  
PRIMTIVE 
-STRING
-NUMBER
-BOOLEAN
-SYMBOL
-


NON PRIMITIVE 
 OBJECTS 
 ARRAYS */

//  prompt("Enter passcode");

//  let newNumber = Number(prompt('Input a number'))
//  if(!Number.isNaN(newNumber)){
//     console.log(`You entered ${newNumber}`)
//  }else{
//     console.log(`why didn't you give a number`)
//  }

//  let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +

// theNumber * theNumber);

// } else {
// console.log("Hey. Why didn't you give me a number?");
// }

// let sum = prompt('Enter a number')
//  if(sum < 10){
//     console.log('SMALL')
//  }else if(sum < 100){
//     console.log('MEDIUM')
//  }else{
//     console.log('LARGE')
//  }

//  let yourName; //undefined
//  do {
//  yourName = prompt("Who are you?");
//  } while (!yourName);
//  console.log(yourName);

/* JS - RELEARN */

const newline = 'Newline is a way of creating a new line "\\n"';
console.log(newline);

console.log("t" / "e");
console.log(!true);
console.log(1 + 1 == 2 && 10 * 10 > 50);

console.log(Math.PI);

// const value = 7

// while (value != undefined) {
//    console.log("Still got something!");
// }

// hitchhikersGuide[ Symbol("meaning of life") ];

var me = {
  first: "Kyle",
  last: "Simpson",
  age: 39,
  specialties: ["JS", "Table Tennis", ["Kitchen", "Toilet", "Bathroom"]],
};

console.log(me.first);
console.log(me.specialties[2][0][2]);
console.log(me.specialties[2]);
console.log(me["last"]);

// const weirdObject = {
//    prop: 'three',
//    '3': 'three'
//  };

// console.log(weirdObject.prop-3); // => NaN
//  console.log(weirdObject.3)
const functionArrow = () => {};

const hero = {
  name: "Batman",
};

// Object destructuring:
const { name: superman } = hero;
console.log(superman);

console.log(typeof null);

console.log(typeof function hello() {});
console.log(typeof functionArrow);

//  let name = 'jenrola'
var name = "jenrola";
var name = "Bisi";
name = "fawaz";

const hissh = "Seyi Vibez";
//  hissh = 'ope'
//  console.log(hissh)

console.log("" == 0);
console.log(false == 0);

var x = "83";
var y = "82";

console.log(x < y);

/* TYPE COERCION/CONVERSION */

console.log(NaN == NaN);
console.log(undefined == undefined);
console.log(null == null);
console.log(null == undefined);
console.log(null == 7);
console.log(undefined == 0);
console.log(Boolean(true));
console.log(Boolean(false));
console.log([] == ![]);

const fruits = ["Banana", "Apple", "Orange"];

console.log(fruits.toString());

/*TEXTBOOK LEARNING*/

// alert('Thanks for your input')

// window.alert('Second one is here ')

var name = "Mark";

window.console.log(name);

var name = "Ace";
window.console.log(name);

var nationality;

nationality = "US";
window.console.log(nationality);

var num = 11;
var newNum = alert(11);
var head = 2;

console.log(typeof newNum);

/*MATHS EXPRESSION*/

var maths = 2 + 2;
var maths = 2 * 3;

console.log(maths);

var num = 1;
var newNum = num++;
console.log(newNum);

var resultOfComputation = 2 * 4 * 4 + 2;
console.log(resultOfComputation);

var userName = "Susan";

// alert("Thanks, " + userName + "!");

// alert("Thanks " + userName + '!')

var message = "Thanks, ";
var banger = "!";
// alert(message + userName + banger);

// alert("2 plus 2 equals " + 2 + 2);

// prompt('Species?', 'Human')

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats - 1;
console.log(tooManyCats);

var country = prompt("",'country');


if (country === "Nigeria") {
  alert("You are correct");
} else if (country !== "Nigeria") {
  country = prompt("HINT: it is in Africa");
  if(country === 'Nigeria'){
   alert('You are now correct')
  }else {
   alert("You are very wrong sir");
 }
} else {
  alert("You are very wrong sir");
}


var city0 = 'Atlanta'

var city1 = 'Baltimore'

var city2 = 'Georgia'


var cities = ['lagos', 'Ame rica', 'London']

console.log(cities)

var animals = ['lion', 'pig', 'fish', 'ram']

animals[9] = 'Seadog'

console.log(animals.length)

var animals = ['pig', 'fish', 'giraffe','lions']
const ans1 =  animals.findIndex(lengthChecker)


function lengthChecker(animal){
   return animal.length === 7
   console.log(animal)
}

console.log(ans1)



const reducedAnimal = animals.pop()
console.log(reducedAnimal)
console.log(animals)
// console.log(ans1)

// var animals = ['lion', 'pig', 'fish', 'ram'];

// var lengthChecker = function(animal) {
//    return animal.length = 3;
// };

// const ans = animals.findIndex(lengthChecker);

// console.log(ans);






const ages = [3, 10, 18, 20];

const answer = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
console.log(answer)
