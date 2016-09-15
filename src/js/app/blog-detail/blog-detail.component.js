'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($routeParams, $scope){
            var blogItems = [
                {title: "Some Title", id: 1, description: "This is a book", publishDate: "2016-09-11"},
                 {title: "Title", id: 2, description: "This is a book"},
                  {title: "Tea", id: 3, description: "This is a book"},
                   {title: "Lite", id: 4, description: "This is a book"},
            ]


            // console.log($routeParams)
            $scope.title = "Blog " + $routeParams.id
    }
});