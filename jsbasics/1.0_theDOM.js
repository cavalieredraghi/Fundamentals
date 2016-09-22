var hobbyList= document.getElementById("hobby-list");
console.log(hobbyList);
var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[0].innerHTML); //an array
console.log(hobbies[1].innerHTML);
console.log(hobbies[2].innerHTML);
console.log(hobbies[3].innerHTML);
console.log(hobbies[4].innerHTML);

var music= document.getElementById("music");
var worst = document.getElementById("worst");
var best = document.getElementById("best");
var favorite = document.getElementById("favorite");
function favoriteSong(){
	document.getElementById("favorite").innerHTML ="Freebird!!!";
}

favoriteSong();
function worstArtist(){
	document.getElementById("worst").innerHTML = "Kayne West";
}

worstArtist();

function bestBand(){
	document.getElementById("best").innerHTML = "Linkin Park";
}

bestBand ();