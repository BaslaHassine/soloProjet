
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
	return item
	}
$('#add').click(function(){
	var nameAdd = $('#idcommodityNameAdd').val();
	var qteAdd  = $('#QteAdd').val();
	var priceAdd= $('#idprice').val();
	var total= parseFloat($('#total').val()) + (parseFloat(qteAdd, 100) * parseFloat(priceAdd, 100));
	$("#total").val(total);
	var amount = $("#idamount").val();
	var remainder = parseFloat(amount, 100) - parseFloat(total, 100);
	$("#idremainder").val(remainder);
	purchaseList.push(addItem(nameAdd, Number(qteAdd), Number(priceAdd)));
	console.log(purchaseList,"this is my array")
});


$('#remove').click(function(){
	var nameRemove  = $("#idcommodityNameRemove").val();
	var  qteRemove = $('#QteRemove').val();
	for(var i = 0; i < purchaseList.length; i++){
		if(nameRemove === purchaseList[i]["name"] && Number(qteRemove) === purchaseList[i]['quantity']){
			purchaseList.splice(i, 1)
			// delete purchaseList[i]
		}

	}	
	console.log(purchaseList);
});

}





