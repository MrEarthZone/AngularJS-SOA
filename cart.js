var cart = [];
var cartNum = 0;
var itemId = [];
var itemAmount = [];

function addCart(id, i) {
    cartNum++;
    itemId.push(id);
    itemAmount.push($("#input-sm" + i).val());
    $("#cart").append("<span class=\"cart-num\" id=\"topActionCartNumber\" style=\"display: block;\">" + cartNum + "</span>");
}

function showCart() {
    
    console.log(itemId);
    console.log(itemAmount);
}