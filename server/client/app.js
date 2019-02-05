var app = angular.module('chatapp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
           controller:'userControl'
           
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller:'userControl'
           
        })
        .state('forgot', {
            url: '/forgot',
            templateUrl: 'templates/forgot.html',
          controller:'userControl' 
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
           
        })
        $urlRouterProvider.otherwise('login');

      });

