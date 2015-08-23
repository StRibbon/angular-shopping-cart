var app = angular.module("shopping-app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'MainController'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'MainController'
      })
      .when('/browse', {
        templateUrl: 'partials/browse.html',
        controller: 'BrowseController'
      })
      .when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'CartController'              
      })

});