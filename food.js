console.log("main.js");

var dogFood = new XMLHttpRequest();
dogFood.addEventListener("load", dogFoodComplete);
dogFood.addEventListener("error", dogFoodFailed);

function dogFoodComplete(event){
	console.log("Dog food has loaded");
	var dogFoodList = JSON.parse(event.target.responseText);
	console.log("dogFoodList", dogFoodList);

	showData(dogFoodList);
};

function dogFoodFailed(event){
	console.log("Dog food failed");
}

function showData(food){
	dogFoodDiv = document.getElementById("dog-food");
	dogFoodData = " ";

	for (x in food){
		var dogFoodType = food[x];
		console.log("dogFoodType", dogFoodType);
		for (var i = 0; i < dogFoodType.length; i++) {
			dogFoodType[i];
			console.log("dogFoodType", dogFoodType[i]);
	};


//Print info to DOM//
		dogFoodData += "<div>";
		dogFoodData += "<h2>" + dogFoodType[0].name + ": " + "</h2>";
		dogFoodData += "<h3>" + dogFoodType.type + " " + dogFoodType[0].volume + "</h3>";
		dogFoodData += "<h4>" + dogFoodType[0].price +  "</h3>";
		dogFoodData += "</div>";

		dogFoodDiv.innerHTML += dogFoodData;
	}

};

dogFood.open("GET", "JSON/dog.json");
dogFood.send();

