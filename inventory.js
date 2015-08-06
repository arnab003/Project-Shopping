(function Inventory()
	{

		//item function to create items
		function item(n,i,p)
						{
							var name=n;
							var id=i;
							var price=p;	
							this.getName=function(){
								return name;
							};
							this.getId=function(){
								return id;
							};
							this.getPrice=function(){
								return price;
							};
						}
							
							

		//Inventory items function
		var InventoryItems=function()
							{
								var itemlist={};

								var grocery=[new item("Rice","r1",200),new item("Oil","o1",300)];
								var beverages=[new item("Tea","t1",200),new item("Coffee","c1",200)];

								itemlist.grocery=grocery;
								itemlist.beverages=beverages;

								this.getAllItems=function()
												{
													var j=0;
													//console.log(itemlist);
													return itemlist;
												};

								this.getItemById=function(id)			
												{
													var item,j,category;
													j=0;
													
													for(var i in Object.keys(itemlist))
													{
														var keyname=Object.keys(itemlist)[i];
														var object=itemlist[keyname];
														for(j in object)
														{
															console.log(object[j].getId());
															if(object[j].getId()==id)
															{
																return object[j];
															}

														}
													

													}
												};
				};
							
		// var items=new InventoryItems();
		// console.log(items.getItemById('c1'));
	  	function grocery()
	  	{
	  			var tax=12.5;
	  			this.getVat=function()
										{
											
											return tax;
										};
		}

		grocery.prototype=Object.create(InventoryItems);
	    
		function beverages()
		{
			var tax=11.5,additonaltax=2.5;
			this.getVat=function()
								{
										
										 return tax;
								};
			this.getAdditionalVat=function()
								{
										
										return additonaltax;
								};
		}

		beverages.prototype=Object.create(InventoryItems);
		
		// var beverageObject=new beverages();
		// var tax=beverageObject.getAdditionalVat();
        function PopulateList()
    						{
    							var i,items,itemlist,categoryOptions;
    							items=registerApi.getInventoryObject();
    							
    							itemlist=items.getAllItems();
    							categoryOptions=[];
    							for(i in Object.keys(itemlist))
            							{
            								categoryOptions.push({name:Object.keys(itemlist)[i]});
            							}

    							var onChangeEvent={
    											change:PopulateItems
    										  };



    							
    						var createOptions=core.getLib("createOptions");
    						//console.log(categoryOptions[0].name);
    						createOptions("category",categoryOptions,onChangeEvent);
    						// createOptions("items","select");
    						var itemList=document.getElementById('items');

    							function PopulateItems()
                						{
                							var itemOptions=[];
                							if(document.getElementById('items'))
                								document.getElementById('items').remove();
                							
	                    								var category=document.getElementById('category').value;
	                    								//console.log(category);
	                    							 	//var keyname=Object.keys(itemlist)[i];
														var object=itemlist[category];
														// console.log(object[0].getName());

														for(var j in object)
														{
	                    									itemOptions.push({id:object[j].getId(),name:object[j].getName()});
	                    								}
	                    								// console.log(itemOptions[0]);
	                    					
	                    							
	                    					createOptions("items",itemOptions);

	                    					
	                    			  }

                		
    						}
    		
    		
			var registerApi=function()
			{
			var KEY = "";
			KEY = core.getKeys("ronojit");
			var inventoryObject=new InventoryItems();

			var groceryObject=new grocery();
			var beveragesObject=new beverages();
				registerApi.getInventoryObject=function()
					{
						return inventoryObject;
					};
				registerApi.getgroceryObject=function()
					{
						return groceryObject;
					};
				registerApi.getbeveragesObject=function()
					{
						return beveragesObject;
					};
			var out=core.setLib(KEY, "InventoryItems", inventoryObject);
			core.setLib(KEY,"grocery",groceryObject);
			core.setLib(KEY,"beverages",beveragesObject);
			console.log(out);
			PopulateList();
			};
			registerApi();

	})();