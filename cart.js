



/*function createElement(tagName, obj, parent)
		{		
			var element=document.createElement(tagName);
			for(var key in obj) 
				{
					element.setAttribute(key, obj[key]);
				}
			parent.appendChild(element);
			return element;
		}*/

function ob()
{
	this.grocery = {
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
		"tax":"10"
		};
	this.bev= {
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
		"tax":"14"
	};
}

var ob1=new ob();

var a=new cart();
a.addBagInCart(ob1);

//var myVar=setInterval(function(){a.myTimer(), a.calculateAmount()},5000);

function cart()
{
	//console.log(a);

	// a.groceryItemDetails(1,"rice",100,5,500);
	// a.groceryItemDetails(2,"vages",20,5,100);
	// a.groceryItemDetails(2,"vages",20,5,100);
/*
	a.beverageItemDetails(1,"rice",100,5,500);
	a.beverageItemDetails(2,"vages",20,5,100);
	a.beverageItemDetails(2,"vages",20,5,100);
	a.beverageTextboxes(5,2, 700);*/

return {
		addBagInCart:function(ob1)
		{
			var a=core.getLib("cartTemplate");

			for(var key in ob1.grocery)
			{
				if(key=="items")
				{
					for(var subkey in ob1.grocery[key])
					{
						/*console.log(ob1.grocery[key][subkey].id);
						var displayDiv=document.getElementById("g");
						var displayElement = createElement("input",{"type":"text", "value": ob1.grocery[key][subkey].id }, displayDiv);

						var displayDiv=document.getElementById("g");
						var displayElement = createElement("input",{"type":"text", "value": ob1.grocery[key][subkey].name }, displayDiv);

						var displayDiv=document.getElementById("g");
						var displayElement = createElement("input",{"type":"text", "value": ob1.grocery[key][subkey].price }, displayDiv);

						var displayDiv=document.getElementById("g");
						var displayElement = createElement("input",{"type":"text", "value": ob1.grocery[key][subkey].quantity }, displayDiv);

						var displayDiv=document.getElementById("g");
						var displayElement = createElement("hr",{}, displayDiv);*/

						a.groceryItemDetails(ob1.grocery[key][subkey].id,ob1.grocery[key][subkey].name,ob1.grocery[key][subkey].price,ob1.grocery[key][subkey].quantity,(ob1.grocery[key][subkey].price)*(ob1.grocery[key][subkey].price,ob1.grocery[key][subkey].quantity));
					}
				}
			}
			a.groceryTextboxes(5,2, 700);

			for(var key in ob1.bev)
			{
				if(key=="items")
				{
					for(var subkey in ob1.bev[key])
					{
						//console.log(ob1.bev[key][subkey].id);
						/*var displayDiv=document.getElementById("b");
						var displayElement = createElement("input",{"type":"text", "value": ob1.bev[key][subkey].id }, displayDiv);

						var displayDiv=document.getElementById("b");
						var displayElement = createElement("input",{"type":"text", "value": ob1.bev[key][subkey].name }, displayDiv);

						var displayDiv=document.getElementById("b");
						var displayElement = createElement("input",{"type":"text", "value": ob1.bev[key][subkey].price }, displayDiv);

						var displayDiv=document.getElementById("b");
						var displayElement = createElement("input",{"type":"text", "value": ob1.bev[key][subkey].quantity }, displayDiv);

						var displayDiv=document.getElementById("b");
						var displayElement = createElement("hr",{}, displayDiv);*/
					}
				}
			}

			/*var gdis=Math.floor(Math.random() * 6) + 1 ;

			var displayDiv=document.getElementById("g");
			var displayElement = createElement("input",{"type":"text", "value": gdis, "id":"gdis" }, displayDiv);

			var bdis=Math.floor(Math.random() * 6) + 1 ;

			var displayDiv=document.getElementById("b");
			var displayElement = createElement("input",{"type":"text", "value": bdis, "id":"bdis" }, displayDiv);*/
		},

	calculateAmount:function()
	{
		//console.log("hello");
	},

	myTimer:function() 
	{
	    document.getElementById("gdis").value = Math.floor(Math.random() * 6) + 1 ;
	    document.getElementById("bdis").value = Math.floor(Math.random() * 6) + 1 ;
	}

}

	//addBaginCart();
}
cart();