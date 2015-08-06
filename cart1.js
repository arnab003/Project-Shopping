(function() {

	function cart()
	{
		this.final1=0;
		this.final2=0;
		this.flag=false;
	}
	
	var grocery=core.getLib("grocery");
	var beverages=core.getLib("beverages");

	var gtax=new grocery();
	var btax=new beverages();

	cart.prototype= {
/*
		final1:0,
		final2:0,
		flag:false,*/

		addBagInCart : function(ob1) {
				console.log(this.flag);
				var a=core.getLib("cartTemplate");
				
				if (!this.flag) 
					{
						this.flag=true;
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
				this.final1=Math.round(disPrice+((gtax.getVat()/100)*disPrice));
				a.groceryTextboxes(5,gtax.getVat(), this.final1);

				var disPrice=totalB-((5/100)*totalB);
				this.final2=Math.round(disPrice+((btax.getVat()/100)*disPrice));
				this.final2=Math.round(this.final2+((btax.getAdditionalVat()/100)*this.final2));
				a.beverageTextboxes(5, btax.getVat(), btax.getAdditionalVat(), this.final2);
			},

			calculateAmount : function() {
				var a=core.getLib("cartTemplate");
				a.grandTotal(this.final1+this.final2);
			}
			
		}//end of proto

		var  c= new cart();
			console.log(c);

		var KEY = "";
			(function()
			{
			KEY = core.getKeys("arnab");
			var out=core.setLib(KEY, "cart", c);
			console.log(out+"arnab");
			})();

})();//end of wrapper