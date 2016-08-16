var app = angular.module('app',[])
    .config(function($httpProvider){
        $httpProvider.interceptors.push('apiAuthInterceptor');
    })

    .value('apiPath','http://192.168.1.254:8089/api/v0')

    .value('authToken','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI1NTNhMzIzNDgzYjIwODNkNTUwOTI3ZDMiLCJqdGkiOiI1NzVlZDgzYjY4YWQ2NWM2MDM4NjNiMmIiLCJpYXQiOjE0NjU4MzM1MzEsImV4cCI6MTQ2ODQyNTUzMX0.b18L7dBYTKhjTfx3VxZpKfQHbzI0UGFwFJqa1xXByKQ');











    //.config(function($routeProvider,$locationProvider){
    //
    //    $routeProvider
    //        .when('/',{
    //            templateUrl : "../templates/home.tpl.html",
    //            controller : "mainController",
    //            controllerAs : "main"
    //        })
    //        .otherwise(
    //        {
    //            redirectTo : '/'
    //        });
    //
    //
    //    $locationProvider.html5Mode(true);
    //    console.log("here");
    //});