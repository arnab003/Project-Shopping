function bag()
{
	selectedData = []; 

/*	this.getSum = function(){
		for()
	}*/

	this.add= function()
	{
		var flag=0;
		var id = document.getElementById("drop").options[document.getElementById("drop").selectedIndex].value;

		for(var keys in selectedData)
		{
			if(selectedData[keys].id === id)
			{
				flag=1;
				selectedData[keys].quantity = document.getElementById("Qty").value; 
			}
		}

		if(flag === 0)
		{
			var newData = {};
			newData.id= id;
			newData.name = getItemById(id);
			newData.price = getItemById(id);
			newData.quantity = document.getElementById("qty").value;
			selectedData.push(newData);
		}

		addBagInCart(selectedData);

	}

	this.change = function()
	{
		var id = document.getElementById("drop").options[document.getElementById("drop").selectedIndex].value;
		var flag = 0;	
		for(var keys in selectedData)
		{
			if(selectedData[keys].id === id)
			{
				flag=1;
				selectedData[keys].quantity = document.getElementById("qty").value; 
			}
		}

		if(flag === 0)
		{
			quantity = 0;
		}

		productOptionData(id,getItemById("item_id").name,getItemById("item_id").price,quantity);
	}
}

var groceryBag = new bag();

var beverageBag = new bag();