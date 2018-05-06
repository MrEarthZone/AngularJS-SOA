var app = angular.module('app', ['ngRoute']);

app.controller('body', function ($scope,$http) {
    $http.get("https://productapi977377.herokuapp.com/Products.php/api/products")
  .then(function(response) {
        console.log(response);
  });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});