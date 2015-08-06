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
		var a=new cart();
function bag()
{
	this.obj = {
		"grocery":[{
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

		"bev":[{
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
		}]
	};


	/*this.grocery = {
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
	};*/

	a.addBagInCart(this.obj);

	a.calculateAmount();
}

//var myVar=setInterval(function(){a.myTimer(), a.addBagInCart(ob1)},5000);

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
	var final1=final2=0;

	var flag=false;

return {
		addBagInCart:function(ob1)
		{
			console.log(flag);
			var a=core.getLib("cartTemplate");

			var gtax=core.getLib("grocery");
			var btax=core.getLib("beverages");
			
			if (!flag) 
				{
					flag=true;
					a.renderTemplate();
				}else
				{
					a.cartContainerClear();
				}			
			
			var totalG=0;
			var totalB=0;

			for(var key in ob1)
			{
				if(key=="grocery" && ob1[key]!=null)
				{
					for(var subkey in ob1[key])
					{
						console.log(ob1[key][subkey]);
						a.groceryItemDetails(ob1[key][subkey].id,ob1[key][subkey].name,ob1[key][subkey].price,ob1[key][subkey].quantity,(ob1[key][subkey].price)*(ob1[key][subkey].quantity));
						totalG=totalG+((ob1[key][subkey].price)*(ob1[key][subkey].quantity));
					}
				}
				if(key=="bev" && ob1[key]!=null)
				{
					for(var subkey in ob1[key])
					{
						console.log(ob1[key][subkey]);
						a.beverageItemDetails(ob1[key][subkey].id,ob1[key][subkey].name,ob1[key][subkey].price,ob1[key][subkey].quantity,(ob1[key][subkey].price)*(ob1[key][subkey].quantity));
						totalB=totalB+((ob1[key][subkey].price)*(ob1[key][subkey].quantity));
					}
				}				
			}

			var disPrice=totalG-((5/100)*totalG);
			final1=Math.round(disPrice+((gtax.getVat()/100)*disPrice));
			a.groceryTextboxes(5,gtax.getVat(), final1);

			var disPrice=totalB-((5/100)*totalB);
			final2=Math.round(disPrice+((btax.getVat()/100)*disPrice));
			final2=Math.round(final2+((btax.getAdditionalVat()/100)*final2));
			a.beverageTextboxes(5, btax.getVat(), btax.getAdditionalVat(), final2);
		},

	calculateAmount:function()
	{
		var a=core.getLib("cartTemplate");
		a.grandTotal(final1+final2);
	},

	myTimer:function() 
	{
	    document.getElementById("dis").value = Math.floor(Math.random() * 6) + 1 ;
	}

}

	//addBaginCart();
}
cart();