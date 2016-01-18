'use strict';

/**
 * @ngdoc overview
 * @name rssreaderClientApp
 * @description
 * # rssreaderClientApp
 *
 * Main module of the application.
 */
angular
  .module('rssreaderClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'environment',
  ])
  .config(function (envServiceProvider) {
	  envServiceProvider.config({
		  domains: {
			  development: ['localhost'],
			  production: ['app-eduraam-rssreader-client-staging.herokuapp.com']
		  },
		  vars: {
			  development: {
				  contentApiUrl: '//localhost:8000/conten/api'
			  },
			  production: {
				  contentApiUrl: '//app-eduraam-rssreader-staging.herokuapp.com',
			  }
		  }
	  });

	  envServiceProvider.check();
  })
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
      .otherwise({
        redirectTo: '/'
      });
  });
