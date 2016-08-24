var colorApp = angular.module('myApp', ['ui.router']);
colorApp.config(function($stateProvider, $urlRouterProvider) {
    console.log("ROUTE PROS");
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'index.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});

