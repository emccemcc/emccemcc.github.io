var app = angular.module('myModule');


app.config(function($routeProvider, $locationProvider ) {

    $routeProvider
        .when('/home', {
            controller: 'controller1',
            templateUrl: 'partials/home.html'
        })
        .when('/work', {
            controller: 'controller1',
            templateUrl: 'partials/work.html'
        })
        .otherwise('/home', {
            controller: 'controller1',
            templateUrl: 'partials/home.html'
        });


});
