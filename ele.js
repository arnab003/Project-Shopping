(function elementFactory()
{


function createElement(tagName, parentElementObj, attrObj, styleObj, eventObj, label)
{
	var element=document.createElement(tagName), 
	attrName, eventName, styleName;


	if(typeof label != "undefined")
	element.appendChild(document.createTextNode(label));	

	if(attrObj!==null)
	{	
		for(attrName in attrObj)
		{
			if (attrObj.hasOwnProperty(attrName))
			element.setAttribute(attrName, attrObj[attrName]);
		}
	}

	if(eventObj!==null)
	{
		for( eventName in eventObj)
		{
			if (eventObj.hasOwnProperty(eventName)) 
			element.addEventListener(eventName, eventObj[eventName]);	
		}
	}


	if(styleObj!==null)
	{
		for(styleName in styleObj)
		{
			if (styleObj.hasOwnProperty(styleName))  
			element.style[styleName]=styleObj[styleName];
		}
	}
	


	parentElementObj.appendChild(element);
	
	return element;
} //end of createElement	



var body=document.body;


var mainContainer = createElement("div", body, {id:"mainContainer"}, { padding:"2%"}, {} );

var block = createElement("div", mainContainer, {id:"block"}, {width:"50%", height:"auto"} );





function createOptions(selectTagId, optionObj, selectTagEventObj)
{

var select = createElement("select", block, {id:selectTagId}, {}, selectTagEventObj);


	if(optionObj!==null)
	{	
		for(var attrName in optionObj)
		{
			if (optionObj.hasOwnProperty(attrName))
			createElement("option", select, {value:optionObj[attrName].name, id:optionObj[attrName].id}, {}, {}, optionObj[attrName].name);
		}
	}

}





function productOptionData(id, name, price, qty)
{

	if(typeof qty=="undefined")
	qty=0;	
	
	createElement("span", block, {}, {color:"red",marginLeft:"5%"}, {}, "ID");
	createElement("span", block, {}, {color:"red",marginLeft:"5%"}, {}, "Name");
	createElement("span", block, {}, {color:"red",marginLeft:"5%"}, {}, "Price");
	createElement("span", block, {}, {color:"red",marginLeft:"5%"}, {}, "Operation");
	createElement("span", block, {}, {color:"red",marginLeft:"5%"}, {}, "QTY");
	var div	= createElement("div",  block, {}, {}, {});

	createElement("input", div, {type:"text", readOnly:"true", value:id}, {marginLeft:"15%", width:"2.5em"}, {});
	createElement("input", div, {type:"text", readOnly:"true", value:name}, {marginLeft:"2%", width:"4em"}, {});
	createElement("input", div, {type:"text", readOnly:"true", value:price}, {marginLeft:"2%", width:"4em"}, {});
	createElement("input", div, {type:"submit", value:"+"}, {marginLeft:"3%", width:"2em"}, {click:addQty});
	createElement("input", div, {type:"submit", value:"-"}, {marginLeft:"1%", width:"2em"}, {click:subQty});
	createElement("input", div, {type:"text", readOnly:"true", value:qty, id:"qty"}, {marginLeft:"4.5%", width:"3em"}, {});
	createElement("input", div, {type:"submit", value:"Add", id:"add"}, {marginLeft:"1%", width:"5em"}, {});
}

function addQty()
{
	var qty = document.getElementById('qty').value ;

	document.getElementById('qty').value = parseInt(qty) + 1;
	
}

function subQty()
{
	var qty = document.getElementById('qty').value ;

	if(qty!=0)
	document.getElementById('qty').value = parseInt(qty) - 1;
}


function AddDataEventLister(tagId, addFucnctionReferece)
{
	var add=document.getElementById(tagId);
	add.addEventListener("click", addFucnctionReferece);
}



function test()
{
	console.log("hello");
}


var testData1=[
{
	name:"grocery"
},
{
	name:"beverages"
}];


var testData2=[
{
id:1,
name:"rice"
},
{
id:2,
name:"veges"
}];


createOptions(1,testData1,{change: function (){console.log('Items');}});


productOptionData(1,"rice", 100);

createOptions(2,testData2,{change: function (){console.log('test');}});

AddDataEventLister("add",test);


function cartTemplate()
{
	var cart = createElement("div", mainContainer, {}, {marginLeft:"60%" ,width:"40%", height:"auto", border:"1px solid"} );
	createElement("div", cart, {}, {}, {}, "Grocery");
	var gLabel = createElement("div", cart, {}, {borderBottom:"2px solid"}, {});
	createElement("span", gLabel, {}, {marginLeft:"12%"}, {}, "Id");
	createElement("span", gLabel, {}, {marginLeft:"8%"}, {}, "Name");
	createElement("span", gLabel, {}, {marginLeft:"8%"}, {}, "Price");
	createElement("span", gLabel, {}, {marginLeft:"8%"}, {}, "QTY");
	createElement("span", gLabel, {}, {marginLeft:"8%"}, {}, "Amount");


	var groceryData	= createElement("div", cart, {}, {borderBottom:"2px solid"}, {} );
	var beverageData	= createElement("div", cart, {}, {}, {} );
	createElement("div", beverageData, {}, {}, {}, "Beverage");
	return {

		groceryItemDetails: function(Id, Name, Price, Qty, Amount)
							{
								var gdata= createElement("div", groceryData, {}, {}, {});
								createElement("span", gdata, {}, {marginLeft:"12%"}, {}, Id );
								createElement("span", gdata, {}, {marginLeft:"10%"}, {}, Name );
								createElement("span", gdata, {}, {marginLeft:"10%"}, {}, Price );
								createElement("span", gdata, {}, {marginLeft:"12%"}, {}, Qty );
								createElement("span", gdata, {}, {marginLeft:"12%"}, {}, Amount );
									
							},

		groceryTextboxes: function(discount, tax, totalAmount)
							{
								createElement("span", groceryData, {}, {}, {}, "Discount(%)" );	
								createElement("input", groceryData,{type:"text", readOnly:"true", value:discount }, {width:"4em"}, {} );

								createElement("span", groceryData, {}, {}, {}, "Tax(%)" );
								createElement("input", groceryData, {type:"text", readOnly:"true", value:tax }, {width:"4em"}, {} );

								createElement("span", groceryData, {}, {}, {}, "Amount(Rs.)" );
								createElement("input", groceryData, {type:"text", readOnly:"true", value:totalAmount }, {width:"4em"}, {} );		
							},					
		beverageItemDetails: function(Id, Name, Price, Qty, Amount)
							{
								var bdata= createElement("div", beverageData, {}, {}, {});
								createElement("span", bdata, {}, {marginLeft:"12%"}, {}, Id );
								createElement("span", bdata, {}, {marginLeft:"10%"}, {}, Name );
								createElement("span", bdata, {}, {marginLeft:"10%"}, {}, Price );
								createElement("span", bdata, {}, {marginLeft:"12%"}, {}, Qty );
								createElement("span", bdata, {}, {marginLeft:"12%"}, {}, Amount );
									
							},

		beverageTextboxes: function(discount, tax, totalAmount)
							{
								createElement("span", beverageData, {}, {}, {}, "Discount(%)" );	
								createElement("input", beverageData,{type:"text", readOnly:"true", value:discount }, {width:"4em"}, {} );

								createElement("span", beverageData, {}, {}, {}, "Tax(%)" );
								createElement("input", beverageData, {type:"text", readOnly:"true", value:tax }, {width:"4em"}, {} );

								createElement("span", beverageData, {}, {}, {}, "Amount(Rs.)" );
								createElement("input", beverageData, {type:"text", readOnly:"true", value:totalAmount }, {width:"4em"}, {} );		
							},									






	};

}//end of cart


/*var  a = new cartTemplate();
a.groceryItemDetails(1,"rice",100,5,500);
a.groceryItemDetails(2,"vages",20,5,100);
a.groceryItemDetails(2,"vages",20,5,100);
a.groceryTextboxes(5,2, 700);

a.beverageItemDetails(1,"rice",100,5,500);
a.beverageItemDetails(2,"vages",20,5,100);
a.beverageItemDetails(2,"vages",20,5,100);
a.beverageTextboxes(5,2, 700);*/

var  a = new cartTemplate();
var KEY = "";
(function()
{
KEY = core.getKeys("suvradip");
var out=core.setLib(KEY, "cartTemplate", a);
console.log(out);
})();



})();//end


/*elementFactory();*/