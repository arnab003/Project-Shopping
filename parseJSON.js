//Dummy Data for the main cart
var data = {
	"grocery":{
		"items":[{
			"id":"r1",
			"name":"rice",
			"price":"60",
			"quantity":"4"
		},
		{
			"id":"o1",
			"name":"oil",
			"price":"100",
			"quantity":"2"
		}], 
		"discount":"10%"
	},
	"beverage":{
		"items":[{
			"id":"p1",
			"name":"pepsi",
			"price":"25",
			"quantity":"1"
		},
		{
			"id":"t1",
			"name":"tropicana",
			"price":"80",
			"quantity":"3"
		}], 
		"discount":"15%"
	}
};
function ProcessCartItems() {
	this.appendCart = function (dataString) {
		for (var i in dataString.grocery.items){
			data.grocery.items.push(dataString.grocery.items[i]);
		}
		for (var j in dataString.beverage.items){
			data.beverage.items.push(dataString.beverage.items[j]);
		}
		for (var type in dataString) {
			data[type].discount = dataString[type].discount;
		}
		console.log(JSON.stringify(data));
	}
}


//Dummy data for appending each time
var data1 = {
	"grocery":{
		"items":[{
			"id":"s1",
			"name":"soyabean",
			"price":"40",
			"quantity":"2"
		}], 
		"discount":"15%"
	},
	"beverage":{
		"items":[{
			"id":"s1",
			"name":"sprite",
			"price":"25",
			"quantity":"1"
		},
		{
			"id":"f1",
			"name":"frooti",
			"price":"15",
			"quantity":"3"
		}], 
		"discount":"20%"
	}
};

var obj = new ProcessCartItems();
obj.appendCart(data1);