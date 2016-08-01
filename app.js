var i, sum, dinerOne, dinerTwo, dinerThree, dinerFour, taxPercentage;


function Diner (){
	this.name = "";
	this.order = [];
}

Diner.prototype.addDish = function (dish){ // add to click handler 
	for (i = 0; i < dishesArr.length; i++){
		if (dishesArr[i].name === dish) {
			this.order.push(dishesArr[i]);
		}
	}
	// console.log(this.order)
	return this.order
}

var DinersArr = [
	dinerOne = new Diner(),
	dinerTwo = new Diner(),
	dinerThree = new Diner(),
	dinerFour = new Diner()
];

function Dish(name, price){
	this.name = name;
	this.price = price;
}


var dishesArr = [
	 lasagna = new Dish("lasagna", 5.99),
	 spaghetti = new Dish("spaghetti",6.99),
	 friedChicken = new Dish("friedChicken", 7.99),
	 meatBallSandwich = new Dish("meatBallSandwich", 5.99),
	 friedPeas = new Dish("friedPeas", 2.99),
	 chickenAndRice = new Dish("chickenAndRice", 5.99),
	 buffaloWings = new Dish("buffaloWings", 6.99),
	 fries = new Dish("frenchFries", 2.99),
	 burger = new Dish("burger", 5.99),
	 hotdog = new Dish("hotdog", 3.99),
	 burrito = new Dish("burrito", 4.99),
	 enchilda = new Dish("enchilada", 4.99)
];


$(function(){
	$("#welcome-overlay").hide();

	$("#dinerName").keyup(function (e) {
		if (e.keyCode == 13) {
			var user = ($(this).val());
			dinerOne.name = user;
			$("#welcome-overlay").html("hello " +dinerOne.name).show().hide(2000);

		}
	});

	$('.food').click(function (e) {
		e.preventDefault();
		var selectedDish = $(this).attr('id');
		dinerOne.addDish(selectedDish);
		var val = $("a#" + selectedDish).text();
		$('.dishes').append($("." +selectedDish+" >h3").text());
		$('.hide').show();
	});

	$('#check-out').click( function () {
		
		// clear current order html
		// console.log(dinerOne);
		var order = dinerOne.order;
		var total = 0;
		$.each(order, function (index, value) {
			// round to second decimal place
			total += this.price;
		});

		$('#bill').html("<p>Total before Tax: $" + total.toFixed(2)  + "</p><p>Tax: "+ (total * .08).toFixed(2) +"</p><p>Total after Tax: $" + (total + (total * .08)).toFixed(2)+"</p></br>");


	});

});




