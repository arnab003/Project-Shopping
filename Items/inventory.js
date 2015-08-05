
function inventory()
{

	function inventoryitems()
	{
		var items={
				grocery:[
						  		{
						   		name:"rice",
						   		id:"basmati",
						   		price:"200"

								}
						],
				beverages:
						[
							{
								name:"tea",
								id:"darjeeling",
								price:"300"

							},
							{
								name:"tea",
								id:"assam",
								price:"400"
							}

						]


			  };
		items.prototype.getName=function()
			{
				return this.name;

			};
		items.prototype.getId=function()
			{
				return this.id;

			};
		items.prototype.getPrice=function()
			{
				return this.price;

			};

	items.getName();

}
































		

	}

}
			