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
			  production: ['rssreader-client-staging.herokuapp.com']
		  },
		  vars: {
			  development: {
				  contentApiUrl: '//localhost:8000/content/api'
			  },
			  production: {
				  contentApiUrl: '//rssreader-staging.herokuapp.com/content/api',
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
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl',
        controllerAs: 'overview'
      })
      .when('/article/:article', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'article'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
