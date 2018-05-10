var app = angular.module('app', ['ngRoute']);

app.controller('body', function ($scope, $http, $window) {

    //Account
    $scope.account = function () {
        if (getAccount() == null) {
            $window.location.href = '/#!/login';
        } else {
            $.when($window.location.href = '/#!/account')
                .then(function () {
                    setAccount();
                });
        }
    }

    //Product
    $http.get("https://productapi977377.herokuapp.com/Products.php/api/products ")
        .then(function (response) {
            console.log(response.data);
        });
    
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'login.html'   
        })
        .when('/account', {
            templateUrl: 'account.html'
        })
        .when('/product', {
            templateUrl: 'product.html'
        })
        .when('/', {
            templateUrl: 'main.html'
        });
});