'use strict';

/**
 * @ngdoc overview
 * @name commentBoardApp
 * @description
 * # commentBoardApp
 *
 * Main module of the application.
 */
angular
  .module('commentBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'AboutCtrl',
        controllerAs: 'home'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'AboutCtrl',
        controllerAs: 'posts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
