var proxy = 'https://cors-anywhere.herokuapp.com/';
var customer = null;
var account = null;

$(document).ready(function () {
    $.get(proxy + 'https://customer-api-shopping.herokuapp.com/api/customers/', function (data) {
        customer = data;
    });
});

function login() {
    $("#warning").empty();
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    var notFound = 0;
    for (i = 0; i < customer.length; i++) {
        if (customer[i].email == email && customer[i].password == password) {
            account = customer[i];
            $("#account").text("โฮ่ง! " + customer[i].name + " ");
            $("#account").append("<i class=\"fas fa-sign-out-alt\" style=\"margin-left: 10px;\" onclick=\"logout()\"></i>");
            location.replace("./#!/");
        } else {
            notFound++;
        }
    }
    if (customer.length == notFound) {
        $("#warning").append("<div class=\"alert alert-danger col-sm-12\" role=\"alert\">Username and/or Password incorrect.</div>");
    }
}

function getAccount() {
    return account;
}

function logout() {
    account = null;
    location.reload();
}

function register() {
    var data = {
        "email": "" + $("#regis-email").val(),
        "password": "" + $("#regis-password").val(),
        "address": "" + $("#regis-address").val(),
        "name": "" + $("#regis-name").val(),
        "lastname": "" + $("#regis-lastname").val(),
        "telno": "" + $("#regis-tel").val()
    }
    $.ajax({
        type: "POST",
        url: proxy + 'https://customer-api-shopping.herokuapp.com/api/customers/',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
            alert("Register is complete.");
            location.reload();
        }
    });
}

function setAccount() {
    $("#edit-email").val(getAccount().email);
    $("#edit-password").val(getAccount().password);
    $("#edit-address").val(getAccount().address);
    $("#edit-name").val(getAccount().name);
    $("#edit-lastname").val(getAccount().lastname);
    $("#edit-tel").val(getAccount().telno);
}

function editAccount() {
    var data = {
        "email": "" + $("#edit-email").val(),
        "password": "" + $("#edit-password").val(),
        "address": "" + $("#edit-address").val(),
        "name": "" + $("#edit-name").val(),
        "lastname": "" + $("#edit-lastname").val(),
        "telno": "" + $("#edit-tel").val()
    }
    $.ajax({
        type: "PUT",
        url: proxy + 'https://customer-api-shopping.herokuapp.com/api/customers/' + getAccount().id,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
            alert("Update is complete.");
        }
    });
}