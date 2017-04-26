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
			for (var i = 0; i < dogFoodType.length; i++) {
				dogFoodType[i]
			};
			for (var x = 1; dogFoodType.length; x >= 0; x++) {
				dogFoodType[i]
			};
			for (var y = 2; dogFoodType.length; y >= 0; y++) {
				dogFoodType[y]
			};


//Print info to DOM//
		dogFoodData += "<div>";
		dogFoodData += "<h2>" + dogFoodType[i].name + ": " + "</h2>";
		dogFoodData += "<h3>" + dogFoodType.type + " " + dogFoodType[i,x,y].volume + "</h3>";
		dogFoodData += "<h4>" + dogFoodType[i,x,y].price +  "</h3>";
		dogFoodData += "</div>";

		dogFoodDiv.innerHTML += dogFoodData;
	}

};

dogFood.open("GET", "JSON/dog.json");
dogFood.send();

//CAT FOOD//

var catFood = new XMLHttpRequest();
catFood.addEventListener("load", catFoodComplete);
catFood.addEventListener("error", catFoodFailed);

function catFoodComplete(event){
	console.log("Cat food has loaded");
	var catFoodList = JSON.parse(event.target.responseText);
	console.log("catFoodList", catFoodList);

	showData(catFoodList);
};

function catFoodFailed(event){
	console.log("Cat food failed");
}

catFood.open("GET", "JSON/cat.json");
catFood.send();

function showData2(food){
	catFoodDiv = document.getElementById("cat-food");
	catFoodData = " ";

	for (x in food2){
		var catFoodType = food2[x];
			for (var i = 0; i < catFoodType.length; i++) {
				catFoodType[i]
			};
			for (var x = 1; catFoodType.length; x >= 0; x++) {
				catFoodType[i]
			};
			for (var y = 2; catFoodType.length; y >= 0; y++) {
				catFoodType[y]
			};


//Print info to DOM//
		catFoodData += "<div>";
		catFoodData += "<h2>" + catFoodType[i].name + ": " + "</h2>";
		catFoodData += "<h3>" + catFoodType.type + " " + catFoodType[i,x,y].volume + "</h3>";
		catFoodData += "<h4>" + catFoodType[i,x,y].price +  "</h3>";
		catFoodData += "</div>";

		catFoodDiv.innerHTML += catFoodData;
	};



