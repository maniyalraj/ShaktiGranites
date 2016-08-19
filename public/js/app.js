//var app = angular.module('myApp', ['ngRoute']);

var app = angular.module('myApp', ['ui.router','ngMaterial', 'ngMessages']);
app.config(function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider
    .when('', '/home');
    

$stateProvider
.state('home', {
	name: 'home',
	url: '/home',
	templateUrl: 'public/partials/home.html'
}).state('home2', {
	name: 'home2',
	url: '/home2',
	templateUrl: 'public/partials/home2.html'
}).state('contact', {
	name: 'contact',
	url: '/contact',
	templateUrl: 'public/partials/contact.html'
}).state('ourClient', {
	name: 'ourClient',
	url: '/ourClient',
	templateUrl: 'public/partials/ourClient.html'
}).state('products', {
	name: 'products',
	url: '/products',
	templateUrl: 'public/partials/products.html'
}).state('company',{
	name: 'company',
	url: '/company',
	templateUrl: 'public/partials/company.html'
});

});



/*angular.module('myApp', [])
.config(['$controllerProvider',
    function ($controllerProvider) {
        $controllerProvider.allowGlobals();
    }
]);*/





