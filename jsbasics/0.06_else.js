 var elevatorUp = false;
 var elevatorBroke = true;
 var elevatorDown = true;
 var elevatorStop = true;

 if (elevatorUp===true) {
 	console.log("Going up");
 } else {
 	console.log ("The Elveator is either broken or going down.");
 }

//write one for elevator broken 

//one for elevator stopped

//elevator going down
//develop cases where you can use && or ||

if (elevatorStop===true && elevatorBroke===true) {
	console.log("elevator is broken and not moving.");
} else { 
	console.log("Elevator is on a different floor, please be patient.");
}