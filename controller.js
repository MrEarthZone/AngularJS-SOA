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
    $scope.product = function () {
        $http.get("https://productapi977377.herokuapp.com/Products.php/api/products ")
            .then(function (response) {
                $(".view").empty();
                for (i = 0; i < response.data.length; i++) {
                    $(".view").append("<div class=\"col-sm-3 product\" align=\"center\">" +
                        "<img src=\"" + response.data[i].picture + "\" alt=\"\">" +
                        "<h6>" + response.data[i].description + "</h6>" +
                        "<h5><b>฿ " + response.data[i].price + ".00</b></h5>" +
                        "<button class=\"btn btn-sm btn-minus\" type=\"button\" onclick=\"minus(" + i + ")\">-</button>" +
                        "<input type=\"text\" class=\"form-control text-center input-sm\" id=\"input-sm" + i + "\" maxlength=\"2\" value=\"1\">" +
                        "<button class=\"btn btn-sm btn-plus\" type=\"button\" onclick=\"plus(" + i + ")\">+</button>" +
                        "<button type=\"button\" class=\"btn btn-danger bucket\" onclick=\"addCart(" + response.data[i].productID + "," + i + ")\" title=\"ใส่ตะกร้า\"><i class=\"fas fa-cart-plus\"></i> ใส่ตะกร้า</button>" +
                        "</div>"
                    )
                };
            });
    }
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
        .when('/cart', {
            templateUrl: 'cart.html'
        })
        .when('/', {
            templateUrl: 'main.html'
        });
});