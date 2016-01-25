'use strict';

angular.module('rssreaderClientApp')
    .controller('ArticleCtrl', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.get('http://localhost:8000/api/content/articles/'+$routeParams.article+'/')
            .success(function(data) {
                $scope.title = data.title;
                $scope.body = data.body;
                $scope.image = data.image;
                $scope.categories = data.categories;
            });
    }]);
