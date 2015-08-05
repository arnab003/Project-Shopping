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
																	console.log(itemlist);
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
					  			this.getVat=function()
														{
															var tax=12.5;
															return tax;
														};
						}

						grocery.prototype=Object.create(InventoryItems);
					    
						function beverages()
						{
							this.getVat=function()
												{
														var tax=11.5;
														 return tax;
												};
							this.getAdditionalVat=function()
												{
														var additonaltax=2.5;
														return additonaltax;
												};
						}

						beverages.prototype=Object.create(InventoryItems);
						
						// var beverageObject=new beverages();
						// var tax=beverageObject.getAdditionalVat();
                        function PopulateList()
                    						{
                    							var i;
                    							var items=new InventoryItems();
                    							var itemlist=items.getAllItems();
                    							var categoryOptions=[];
                    							for(i in Object.keys(itemlist))
		                    							{
		                    								categoryOptions.push({name:Object.keys(itemlist)[i]});
		                    							}
                    						var onChangeEvent={
                    											change:show
                    										  };


       		
                    							
                    						var createOptions=core.getLib("createOptions");
                    						//console.log(categoryOptions[0].name);
                    						createOptions(categoryOptions[0].name,categoryOptions,onChangeEvent);
                    						createOptions(1,"select",onChangeEvent);
		                    						function show()
			                    						{
			                    							var itemOptions=[];
			                    							for(i in Object.keys(itemlist))
					                    							{
					                    							 	var keyname=Object.keys(itemlist)[i];
																		var object=itemlist[keyname];
					                    								itemOptions.push({id:Object.keys(itemlist)[i].name,name:Object.keys(itemlist)[i]});

					                    							}


			                    						}
                    						}
                    		PopulateList();
                    		var KEY = "";
							(function()
							{
							KEY = core.getKeys("ronojit");
							var out=core.setLib(KEY, "Inventory", InventoryItems);
							core.setLib(KEY,"grocery",grocery);
							core.setLib(KEY,"beverages",beverages);
							console.log(out);
							})();

					})();