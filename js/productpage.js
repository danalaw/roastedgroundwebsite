// JavaScript Document

function searchFunction(){
	var searchInput = document.getElementById("searched");
	alert(document.getElementById.innerHTML = "Roasted Coffee's search elves are sleeping at the moment. But once they wake up, they'll work on searching for " + searchInput.value);
	
}

//Create currency/price Arrays 

var usdArray = ["Price: $18.50", "Price: $24.99", "Price: $20.45", "Price: $16.75", "Price: $28.25", "Price $15.65", "Price $30.99", "Price: $27.99", "Price: $20.00"];

var eurArray = ["Price: €17.75", "Price: €23.95", "Price: €19.60", "Price: €15.90", "Price: €27.00", "Price €14.50", "Price €29.00", "Price: €26.60", "Price: €19.00"];

var gbpArray = ["Price: £14.80", "Price: £20.00", "Price: £16.40", "Price: £13.40", "Price: £22.60", "Price £12.50", "Price £24.80", "Price: £22.40", "Price: £16.00"];


//Create function that prints out the arrays in a for-loop

function writePrices(array){
	
	for(var i = 0; i < array.length; i++){
		
		
		document.getElementById("product-"+i).innerHTML = array[i];
	}
	
}
