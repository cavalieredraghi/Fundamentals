var bankAccount = 50;
var appleWatch = 400;
var appleWatchGold = 10000;

if (bankAccount > appleWatch) {
		console.log("make it rain boi");
}else if (bankAccount < appleWatchGold) {
		console.log("Start selling plasma to get this!!!");
} else {
		console.log("Get a job you hippie!");
}

//TODO create a personAge then use if/ else if/ else to check if that person is to vote

var personAge = 24;
if (personAge<18) {
	console.log("Sorry you are to young to vote.");
}else if (personAge>= 18) { 
	console.log("are you registered vote? If not what is wrong with you?")
}else{
console.log("give up your age you fool.")
}

// challenge create a var and assign it a value 
// next create an if, else if, else to evaluate if
// the number is divisable by 2 or 3
var integer = 7;
if (integer%2 == 0) {
	console.log(integer/2);
}else if (integer%3 == 0) {
	console.log(integer/3);
}else {
	console.log("I am not Error or Bagu.");
}
// John's example
var numberOne = 7;
if ((numberOne % 2 ===0) && (numberOne % 3 === 0)) {
	console.log ("Number is divisable by 2 and 3");
}else if ((numberOne % 2 === 0)) {
	console.log ( "number is divisable by 2.");
}else if ((numberOne % 3 === 0)) {
	console.log (" number is divisable by 3.");
}else {
	console.log ("number is Prime.");
}
var iAmATestVariable = "HI!";