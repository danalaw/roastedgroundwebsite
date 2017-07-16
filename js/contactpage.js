// JavaScript Document

function searchFunction(){
	var searchInput = document.getElementById("searched");
	alert(document.getElementById.innerHTML = "Roasted Coffee's search elves are sleeping at the moment. But onc	e they wake up, they'll work on searching for " + searchInput.value);
	
}

//All info learned from Authoring Principles. Used common regexes.

//First validate name.
function nameValidator(){
	var validName = document.getElementById('namefield').value;
	var nameRegex = /^[a-zA-Z ]{2,30}$/;
	var nameValidation = document.getElementById("nameValidationTag");
	
	
	if(validName !== "" && nameRegex.test(validName)){
		nameValidation.innerHTML = "Your name is beautiful!";
		nameValidation.style.color = "Green";
	}
	else if(validName === ""){
		nameValidation.innerHTML = "Where is your name?";
		nameValidation.style.color = "Red";
	}
	else{
		nameValidation.innerHTML = "Are you sure that's your name?";
		nameValidation.style.color = "Red";
	}
}

//Validating email
function emailValidator(){
	var validEmail = document.getElementById('emailfield').value;
	var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;
	var emailValidation = document.getElementById("emailValidationTag");
	
	if(validEmail !== "" && emailRegex.test(validEmail)){
		emailValidation.innerHTML = "Thanks for your email! We promise we won't spam it too much.";
		emailValidation.style.color = "Green";
	}
	else if(validEmail === ""){
		emailValidation.innerHTML = "Where is your email?";
		emailValidation.style.color = "Red";
	}
	else{
		emailValidation.innerHTML = "Hey, that doesn't look like a real email!";
		emailValidation.style.color = "Red";
	}
}

//Validate message. No regex here, just validating if user wrote anything at all in the message box.

function messageValidator(){
	var validMessage = document.getElementById('messagefield').value;
	var messageValidation = document.getElementById("messageValidationTag");
	
	if(validMessage === ""){
		messageValidation.innerHTML = "You haven't written anything!";
		messageValidation.style.color = "Red";
	}
	else{
		messageValidation.innerHTML = "Thank you! We love hearing from people. We'll get in touch soon!";
		messageValidation.style.color = "Green";
	}
	
}

//Wanted to give the checkbox an event as well.

function checkboxChecked(){
	var checkboxValidation = document.getElementById("checkboxValidationTag");
	
	checkboxValidation.innerHTML = "We'll miss updating you on the latest coffee facts!";
	checkboxValidation.style.color = "Green";
}

//Giving the select an event as well.

function favesChecked(){
	var validFaves = document.getElementById('faves').value;
	var favesValidation = document.getElementById("favesValidationTag");
	
	if(validFaves === "Latte"){
		favesValidation.innerHTML = "We latte you as well.";
		favesValidation.style.color = "Green";
	}
	else if(validFaves === "Espresso"){
		favesValidation.innerHTML = "You need to espresso yourself!";
		favesValidation.style.color = "Green";
	}
	else if(validFaves === "Cold Brew"){
		favesValidation.innerHTML = "You must be American.";
		favesValidation.style.color = "Green";
	}
	else if(validFaves === "I don't like coffee"){
		favesValidation.innerHTML = "So... what are you doing here?";
		favesValidation.style.color = "Green";
	}
	else{
		favesValidation.innerHTML = "Make up your mind!";
		favesValidation.style.color = "Green";
	}
}

//Event handler to add a little feedback to the contact page. W3schools helped.

function focuscolor(x){
	x.style.background = "papayawhip";
}

function unfocuscolor(x){
	x.style.background = "white";
}