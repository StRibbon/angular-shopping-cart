app.factory('Cart', function() {
  var Cart = {};

  Cart.itemList = [];

  Cart.getItems = function () {
    return Cart.itemList;
  }

  Cart.addItem = function(obj) {
    obj.id = Cart.itemList.length;
    Cart.itemList.push(obj);
  };

  Cart.findItem = function(index) {
    return Cart.itemList[index];
  };

  Cart.removeItem = function(index) {
    Cart.itemList.splice(index,1);
  };

  Cart.badge = function(){
    return Cart.itemList.length;
  }

  return Cart;
});