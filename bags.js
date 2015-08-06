
var groceryBag = new bag();
var beverageBag = new bag();
/*if(document.getElementById("category").options[document.getElementById("items").selectedIndex].value == 'grocery'){
	AddDataEventLister("drop2",groceryBag.change);
	AddDataEventLister("add",groceryBag.add);
}
else{
	AddDataEventLister("drop2",beverageBag.change);
	AddDataEventLister("add",beverageBag.add);
}*/
var obj= {
	"grocery": groceryBag.selectedData,
	"bev" : beverageBag.selectedData
};

function bag()
{
	this.selectedData = []; 

	this.add= function()
	{
		var flag=0;
		//var id = document.getElementById("drop2").options[document.getElementById("drop2").selectedIndex].value;
		id = document.getElementById("id").value;
		
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
			newData.id= id;
			//newData.name = getItemById(id);
			newData.name = document.getElementById("name").value;

			//newData.price = getItemById(id);
			newData.price = document.getElementById("price").value;

			newData.quantity = document.getElementById("qty").value;
			this.selectedData.push(newData);
		}

		//addBagInCart(obj);
		console.log(obj);
	};

	this.change = function()
	{

		var id = document.getElementById("drop2").options[document.getElementById("drop2").selectedIndex].value;
		var flag = 0;	
		for(var keys in selectedData)
		{
			if(selectedData[keys].id == id)
			{
				document.getElementById("qty").value = selectedData[keys].quantity; 
			}
		}
     
		
	};

	AddDataEventLister('items',{change:functionName});
}

