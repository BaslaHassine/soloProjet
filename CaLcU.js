window.onload= function(){
var purchaseList = [];

var item = {
	name: "",
	quantity: 0,
	price:0
};

var addItem = function(name,quantity,price){
	var item = {}
		item.name = name,
		item.quantity = quantity,
		item.price = price
	return item;
	}

// 	var desplayItem = function(purchaseList){
// 	var str = "";
// 	for(var i = 0; i < purchaseList.length; i++){
// 		str = str + purchaseList[i]['name'].toUpperCase() +" x "+purchaseList[i]['quantity'] +"     "+purchaseList[i]['price'];
// 	}
// 	return str;
// 	console.log(purchaseList, str)
// }	

$('#add').click(function(){
	var nameAdd = $('#idcommodityNameAdd').val();
	var qteAdd  = $('#QteAdd').val();
	var priceAdd= $('#idprice').val();
	var total= parseFloat($('#total').val()) + (parseFloat(qteAdd, 100) * parseFloat(priceAdd, 100));
	$("#total").val(total.toFixed(3));
	var amount = $("#idamount").val();
	var remainder = parseFloat(amount, 100) - parseFloat(total, 100);
	$("#idremainder").val(remainder.toFixed(3));
	purchaseList.push(addItem(nameAdd, Number(qteAdd), Number(priceAdd)));
	console.log(purchaseList,"this is my addArray");
	$("#idcommodityNameAdd").val("");
	$("#QteAdd").val('');
	$("#idprice").val('');
$("#list").append("<tr id='L"+nameAdd+ "'> <td>"+nameAdd+"</td> <td> x </td> <td>"+qteAdd+"</td> <td> $ </td> <td>"+priceAdd+"</td> <input type='hidden' class='idprice' value='"+priceAdd+"' > <input type='hidden' id='Qadd' value='"+qteAdd+"' ></tr>");
});

$('#remove').click(function(){
	var nameRemove  = $("#idcommodityNameRemove").val();
	var  qteRemove = $('#QteRemove').val();
	for(var i = 0; i < purchaseList.length; i++){
		if(nameRemove === purchaseList[i]["name"] && Number(qteRemove) === purchaseList[i]['quantity']){		
		var	total = parseFloat($('#total').val()) - (purchaseList[i]["quantity"] * purchaseList[i]["price"]);
			$("#total").val(total.toFixed(3));
		var	remainder = parseFloat($("#idamount").val(), 100) -parseFloat(total, 100);
			console.log(remainder, parseFloat(total, 100))
			$("#idremainder").val(remainder.toFixed(3));
			purchaseList.splice(i, 1);
			$("#L"+nameRemove).remove();
		}
			if(nameRemove === purchaseList[i]['name'] && Number(qteRemove) < purchaseList[i]["price"]){
		var	total = parseFloat($('#total').val()) - (Number(qteRemove) * purchaseList[i]["price"]);
			purchaseList.splice(i, 1, addItem(nameRemove, Number(purchaseList[i]["quantity"] - qteRemove), purchaseList[i]["price"]));
			console.log(total);
			$("#total").val(total.toFixed(3), purchaseList[i]["quantity"]);
		var	remainder = parseFloat($("#idamount").val(), 100) -parseFloat(total, 100);
			console.log(remainder, parseFloat(total, 100))
			$("#idremainder").val(remainder.toFixed(3));
			
		}		
		console.log(purchaseList, "this is my removeArray");
		}	
});


//  var upperBound = x;
//     function guessMyNumber(n) { 
//  if (n > x) { 
//  return 'Out of bounds! Please try a number between 0 and'+' '+x; 
//  } else if (n === randInt(x)) { 
//  return 'You guessed my number!'; 
//  } 
//  return 'Nope! That wasnt it!'; 
//  } 
//  function randInt(n) { 
//  return Math.floor(Math.random() * (n + 1)) 
//  }

// $("#myButton").click(function(){

// });


}





