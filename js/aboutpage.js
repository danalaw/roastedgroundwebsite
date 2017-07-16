// JavaScript Document

function searchFunction(){
	var searchInput = document.getElementById("searched");
	alert(document.getElementById.innerHTML = "Roasted Coffee's search elves are sleeping at the moment. But once they wake up, they'll work on searching for " + searchInput.value);
	
}

//Create an array of testimonials
var testimonialArray = [];

testimonialArray[0] = "Wow, this coffee is absolutely amazing!!! Better than vodka! -Lucille Blegh";
testimonialArray[1] = "Who knew coffee could change my life? -Johnathan Swift";
testimonialArray[2] = "I may be in love with caffeine. -Darling Wendy";
testimonialArray[3] = "There is a 10th level to Heaven and it's in this coffee. -Dante Funferno";
testimonialArray[4] = "I stared into the coffee and it stared back at me. -Wilhelm";
testimonialArray[5] = "Every High Noon I have one of these. -Cooper Gary";
testimonialArray[6] = "This is a coffee you can't refuse. -Tito Corleone";
testimonialArray[7] = "I love the smell of coffee in the morning. -Kill Bilgore";

//Make a function that will retrieve random index and print into DOM

function printRandomTestimonial(){
	var randomIndex = Math.floor((Math.random() * testimonialArray.length));
	return testimonialArray[randomIndex];
}

function runPrintRandomTestimonial(){
	document.getElementById("testimonialarray").innerHTML = printRandomTestimonial();
}


