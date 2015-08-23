app.factory('Cart', function() {
  var Cart = {};
  Cart.count = 0;

  Cart.itemList = [];

  Cart.getItems = function () {
    return Cart.itemList;
  }

  Cart.addItem = function(num, obj) {
    Cart.count += Number(num);
    obj.quantity = Number(num);
    Cart.itemList.push(obj);
  };

  Cart.findItem = function(index) {
    return Cart.itemList[index];
  };

  Cart.deleteItem = function(index) {
    Cart.itemList.splice(index,1);
  };

  Cart.badge = function(){
    return Cart.count;
  }

  return Cart;
});