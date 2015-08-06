(function WrapBags(){
	//"use strict";
	// var Inventory = core.getLib("InventoryItems");
	var inventory = core.getLib("InventoryItems"),
		Inventory = new inventory(),
		productOptionData =	core.getLib("productOptionData"),
		AddDataEventLister = core.getLib("AddDataEventLister"),
		groceryBag = new Bag(),
		beverageBag = new Bag(),
		obj= {
			"grocery": groceryBag.selectedData,
			"bev" : beverageBag.selectedData
		},
		flag=0;

	/*function AddDataEventLister(tagId, addFucnctionReferece, event)
	{
		var add=document.getElementById(tagId);
		add.addEventListener(event, addFucnctionReferece);
	}
	*/	
	
	/*{change: function (){console.log('test');}}*/

	AddDataEventLister("category",{change: changeSelection} );

	function selectedElement(id){
		return document.getElementById(id).options[document.getElementById(id).selectedIndex];
	}

	function update(name,price,quantity){
		if(quantity !== "undefined"){
			document.getElementById("qty").value = quantity;	
		}
		if(name !== "undefined"){
			document.getElementById("name").value = name;	
		}
		if(price !== "undefined"){
			document.getElementById("price").value = price;	
		}
		
	}

	// function productOptionData(name,price,quantity){
	// 	if(typeof quantity === "undefined"){
	// 		quantity = 0;
	// 	}
	// 	document.getElementById("name").value = name;
	// 	document.getElementById("price").value = price;
	// 	document.getElementById("qty").value = quantity;
	// }

	function changeSelection(){
		
		var id = selectedElement("items").id;
		var quantity = 1,
		name = Inventory.getItemById(id).getName(),
		price = Inventory.getItemById(id).getPrice();

		if(flag === 0){
			productOptionData(name,price,quantity);
			flag=1;
		}
		else
			update(name,price,quantity);	

		if(selectedElement("category").value == "grocery"){
			// AddDataEventLister("items",groceryBag.change,"change");
			AddDataEventLister("items",{change: groceryBag.change });
			//AddDataEventLister("add",groceryBag.add,"click");
			AddDataEventLister("add",{click : groceryBag.add});
			selectedData = obj.grocery;
		}
		else{
			//AddDataEventLister("items",beverageBag.change,"change");
			AddDataEventLister("items",{change: beverageBag.change });
			// AddDataEventLister("add",beverageBag.add,"click");
			AddDataEventLister("add",{click : beverageBag.add});
			selectedData = obj.bev;
		}
		for(var keys in selectedData)
		{
			if(selectedData[keys].id == id)
			{
				quantity = selectedData[keys].quantity;
				update(name,price,quantity);
				//break;
			}
		}
	
		//productOptionData(name,price,quantity);
	}

	function Bag()
	{
		this.selectedData = []; 
		var cart=core.getLib("cart");

		this.add= function()
		{
			
			console.log(obj);
			if(selectedElement("category").value === "grocery"){
				selectedData = obj.grocery;
			}
			else{
				selectedData = obj.bev;
			}
			var flag=0;
			var id = selectedElement("items").id;
			for(var keys in selectedData)
			{
				if(selectedData[keys].id == id)
				{
					selectedData[keys].quantity = document.getElementById("qty").value; 
					flag=1;
				}
			}

			if(flag === 0)
			{
				var newData = {};
			
				newData.name = Inventory.getItemById(id).getName();
				newData.id = id;
				newData.price = Inventory.getItemById(id).getPrice();
				newData.quantity = document.getElementById("qty").value;
				
				if(typeof selectedData === "undefined")
					selectedData = [];
				selectedData.push(newData);
			}
			
			console.log(obj);

			cart.addBagInCart(obj);
			cart.calculateAmount();
		};


		this.change = function()
		{
			var id = selectedElement("items").id,
			name = Inventory.getItemById(id).getName(),
			price = Inventory.getItemById(id).getPrice(),
			quantity=0;

			if(selectedElement("category").value === "grocery"){
				selectedData = obj.grocery;
			}
			else{
				selectedData = obj.bev;
			}
				
			for(var keys in selectedData)
			{
				if(selectedData[keys].id == id)
				{
					quantity = selectedData[keys].quantity; 
					
				}
			}
			
			update(name,price,quantity);

			/*var id = document.getElementById("items").options[document.getElementById("items").selectedIndex].id;
			
			/*name = Inventory.getItemById(id).getName();
			price = Inventory.getItemById(id).getPrice();
			// productOptionData(name,price,quantity);
			*/
		};
	}	
	
})();