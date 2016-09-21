//Declaration of the function
function helloWorld () {
	console.log("Hello World");
}

// call the function
helloWorld();

function Print_my_name_print_your_name (){
	console.log("Anthony and Slackbot")
}

Print_my_name_print_your_name();

//Scope 

var name = function(){
	console.log("Anthony and Slackbot");
}

name();

function addNumbers (){
	var x = 10;
	var y = 10;
	console.log (x+y);
}

addNumbers();


function multiplyNumbers () {
	var x = 10;
	var y = 10;
	console.log (x*y);

}

multiplyNumbers();

//parameters & Arguments
function printNumbers (x){
	console.log("The number you entered was:" + x);
}
printNumbers (6);

//making a function

function pinNumber (xyz){
	var pin = 1234;
	if (pin === xyz) { 
		console.log("you have entered the correct pin");
		}else {
			console.log( "wrong pin");
		}
}
pinNumber(1234);