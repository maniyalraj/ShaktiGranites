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
}).state('contact', {
	name: 'contact',
	url: '/contact',
	templateUrl: "public/partials/contact.html"
}).state('ourClient', {
	name: 'ourClient',
	url: '/ourClient',
	templateUrl: "public/partials/ourClient.html"
});

});


$( document ).ready(function() {


});



