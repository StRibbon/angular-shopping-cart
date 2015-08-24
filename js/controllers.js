app.controller('HomeController', function($scope){
  $scope.message = "Knock Knock"
});

app.controller('MainController', function($scope, $location){
  $scope.message = "Main St";
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

app.controller('BrowseController', function($scope, $http, Cart){
  $http.get('teas.json').then(function(data){
  	$scope.teaData = data.data;
  });
  $scope.setSort = function(type){
	$scope.sort = "-" + type.toLowerCase();
  };
  $scope.addItem = function(quantity, item){
  	Cart.addItem(quantity, item);
  	$scope.Badge = Cart.badge();
  };

});

app.controller('CartController', function($scope, Cart){
  $scope.message = "$$$";
  $scope.items = Cart.getItems();
  $scope.Badge = Cart.badge();
  $scope.Total = Cart.addTotal($scope.items);	
  $scope.removeItem = function(index){
  	console.log(index);
  	Cart.deleteItem(index);
  	$scope.Badge = Cart.addTotalItems($scope.items);
  };
  $scope.updateItem = function(tea){
  	tea.subTotal = tea.quantity * tea.price;
  	$scope.Badge = Cart.addTotalItems($scope.items);
  	$scope.Total = Cart.addTotal($scope.items);	
  };

});