window.onload= function(){

$('#add').click(function(){
	var name = $('#idcommodityNameAdd').val();
	var qte  = $('#Qte').val();
	var price= $('#idprice').val();
	console.log(price)
	var total= parseFloat($('#total').val()) + (parseFloat(qte, 100) * parseFloat(price, 100));
	$("#total").val(total);
	var amount = $("#idamount").val();
	var remainder = parseFloat(amount, 100) - parseFloat(total, 100);
	$("#idremainder").val(remainder);

});







}