
var app = angular.module('app', []);
var route = angular.module('app', ['ngRoute']);
app.controller('main-con', function ($scope) {

});

route.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'login.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});

