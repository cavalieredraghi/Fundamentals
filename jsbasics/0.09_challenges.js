/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/
/*-----------------------------------------------------------
SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/


/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/
/*Bronze*/
function bronze (a,b){
	var space = " ";
	console.log(a+space+b);
}
bronze ("Anthony", "Holt");

//Silver
function monthlyExpense(rent, utlities, food, gas, power, car){
	return rent+utlities+food+gas+power+car;
}
console.log(monthlyExpense(500, 400, 150, 160, 200, 200));
//GO FOR GOLD!!!
function sodaCalulator(amount, price, tax){
	return"soda costs this much at the quanity and price you entered "+((amount*price)*tax);
}
console.log(sodaCalulator (100,.99, 1.07));
