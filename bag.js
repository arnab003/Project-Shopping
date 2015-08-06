(function wrapBags(){
	
	function AddDataEventLister(tagId, addFucnctionReferece, event)
	{
		var add=document.getElementById(tagId);
		add.addEventListener(event, addFucnctionReferece);
	}
	
	var groceryBag = new bag();
	var beverageBag = new bag();
	var obj= {
		"grocery": groceryBag.selectedData,
		"bev" : beverageBag.selectedData
	};
	
	AddDataEventLister("category",changeSelection, "change");

	function selectedElement(id){
		return document.getElementById("items").options[document.getElementById("items").selectedIndex];
	}

	function productOptionData(name,price,quantity){
		if(typeof quantity === "undefined"){
			quantity = 0;
		}
		document.getElementById("name").value = name;
		document.getElementById("price").value = price;
		document.getElementById("qty").value = quantity;
	}

	function changeSelection(){
		var id = selectedElement("items").id;
		var item = core.getLib("Inventory");
		var Inventory=new item(), quantity = 0;
		name = Inventory.getItemById(id).getName();
		price = Inventory.getItemById(id).getPrice();
		

		if(selectedElement("category").value == 'grocery'){
			AddDataEventLister("items",groceryBag.change,"change");
			AddDataEventLister("add",groceryBag.add,"click");
			selectedData = obj.grocery;
		}
		else{
			AddDataEventLister("items",beverageBag.change,"change");
			AddDataEventLister("add",beverageBag.add,"click");
			selectedData = obj.bev;
		}
		for(var keys in selectedData)
		{
			if(selectedData[keys].id == id)
			{
				quantity = selectedData[keys].quantity; 
			}
		}
		productOptionData(name,price,quantity);

	}

	function bag()
	{
		this.selectedData = []; 

		this.add= function()
		{
			var flag=0;
			var id = document.getElementById("items").options[document.getElementById("items").selectedIndex].id;
			for(var keys in this.selectedData)
			{
				if(this.selectedData[keys].id == id)
				{
					this.selectedData[keys].quantity = document.getElementById("qty").value; 
					flag=1;
				}
			}

			if(flag == 0)
			{
				var newData = {};

				var item = core.getLib("Inventory");
				var Inventory=new item();
				newData.name = Inventory.getItemById(id).getName();
				newData.id = id;
				newData.price = Inventory.getItemById(id).getPrice();
				newData.quantity = document.getElementById("qty").value;
				
				if(typeof this.selectedData === "undefined")
					this.selectedData = [];
				this.selectedData.push(newData);
			}
			if(document.getElementById("category").options[document.getElementById("category").selectedIndex].value == 'grocery'){
				obj.grocery = this.selectedData;
			}
			else{
				obj.bev = this.selectedData;
			}
			console.log(obj);
		}


		this.change = function()
		{
			if(document.getElementById("category").options[document.getElementById("category").selectedIndex].value == 'grocery'){
				selectedData = obj.grocery;
			}
			else{
				selectedData = obj.bev;
			}
			var id = document.getElementById("items").options[document.getElementById("items").selectedIndex].id;
			var flag = 0, quantity=0;	
			for(var keys in selectedData)
			{
				if(selectedData[keys].id == id)
				{
					quantity = selectedData[keys].quantity; 
				}
			}

			var id = document.getElementById("items").options[document.getElementById("items").selectedIndex].id;
			var item = core.getLib("Inventory");
			var Inventory=new item();
			name = Inventory.getItemById(id).getName();
			price = Inventory.getItemById(id).getPrice();
			productOptionData(name,price,quantity);
			
		}
	}	
	
})();


