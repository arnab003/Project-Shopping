(function(){

	//item function to create items
	function Item(name,id,price){

		this.name=name;
		this.id=id;
		this.price=price;

	}

	Item.prototype.getName=function(){

		return this.name;
	};			

	Item.prototype.getId=function(){

		return this.name;
		
	};	
	Item.prototype.getPrice=function(){

		return this.name;

	};					

	//Inventory items function
	var InventoryItems=function(){
		// console.log(a);
		// var json=JSON.parse(item);
		this.itemlist={};
		var grocery=[],beverages=[];
		grocery=[new Item("Rice","r1",200),new Item("Oil","o1",300)];
		beverages=[new Item("Tea","t1",200),new Item("Coffee","c1",200)];

		this.itemlist.grocery=grocery;
		this.itemlist.beverages=beverages;

	};

	InventoryItems.prototype.getAllItems=function(){
		var j=0;
		//console.log(itemlist);
		return this.itemlist;
	};

	InventoryItems.prototype.getItemById=function(id){

		var item,j,category;
		j=0;
		
		for(var i in Object.keys(this.itemlist))
		{
			var keyname=Object.keys(this.itemlist)[i];
			var object=this.itemlist[keyname];
			for(j in object){
				
				console.log(object[j].getId());
				if(object[j].getId()==id){
					return object[j];
				}

			}
		

		}

	};	

	function grocery(){

		var tax=12.5;

		this.getVat=function(){
		return tax;
		};
	}

	grocery.prototype=Object.create(InventoryItems);
    
	function beverages(){

		var tax=11.5,additonaltax=2.5;

		this.getVat=function(){
									
			return tax;

		};

		this.getAdditionalVat=function(){
									
			return additonaltax;

		};
	}

	beverages.prototype=Object.create(InventoryItems);
		
		// var beverageObject=new beverages();
		// var tax=beverageObject.getAdditionalVat();
    function PopulateList(){
		var i,items,itemlist,categoryOptions;
		items=inventoryObject;

		itemlist=items.getAllItems();
		categoryOptions=[];
		categoryOptions.push({name:"Select Category"});
		
		for(i in Object.keys(itemlist)){

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

		function PopulateItems(){
					
			var itemOptions=[];

			if(document.getElementById('items'))
				document.getElementById('items').remove();
			
			var category=document.getElementById('category').value;
			//console.log(category);
		 	//var keyname=Object.keys(itemlist)[i];
			var object=itemlist[category];
			// console.log(object[0].getName());

			for(var j in object){
				
				itemOptions.push({id:object[j].getId(),name:object[j].getName()});

			}
			// console.log(itemOptions[0]);
			
					
			createOptions("items",itemOptions);

					
		}

                		
	}
    		
    var inventoryObject=new InventoryItems();
    var groceryObject=new grocery();
    var beverageObject=new beverages();
	var registerApi=function(){

	var KEY = "";
	KEY = core.getKeys("ronojit");
	
	var out=core.setLib(KEY, "InventoryItems", InventoryItems);
	core.setLib(KEY,"grocery",grocery);
	core.setLib(KEY,"beverages",beverages);
	console.log(out);
	PopulateList();

	};

	//Calling Register Api which is registering all the class references
	registerApi();

})();