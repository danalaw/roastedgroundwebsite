// JavaScript Document

//Search function/event handler that pops up an alert box when you try to search in the navigation bar's search box. It also returns the value of what you searched for to you.

function searchFunction() {
	var searchInput = document.getElementById("searched");
	alert(document.getElementById.innerHTML = "Roasted Coffee's search elves are sleeping at the moment. But once they wake up, they'll work on searching for " + searchInput.value);

}

//A popup function. Basically just toggles show to show a green span with a "fun fact".
function popupFunction() {
	var popup = document.getElementById('mycoffeepopup');
	popup.classList.toggle('show');
}
