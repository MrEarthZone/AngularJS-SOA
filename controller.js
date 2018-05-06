var app = angular.module('app', ['ngRoute']);

app.controller('body', function ($scope,$http) {
    $http.get("https://pacific-peak-27279.herokuapp.com/api/ProductReview/")
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