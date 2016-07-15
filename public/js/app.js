//var app = angular.module("myApp", ["ngRoute"]);

var app = angular.module("myApp", ["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider) {
    
	/*$urlRouterProvider
    .otherwise( {
        templateUrl : "public/partials/home.html"
    });*/
    

$stateProvider
.state('home', {
	name: 'home',
	url: '/home',
	templateUrl: "public/partials/home.html"
}).state('home2', {
	name: 'home2',
	url: '/home2',
	templateUrl: "public/partials/home2.html"
});

});


$( document ).ready(function() {


});



