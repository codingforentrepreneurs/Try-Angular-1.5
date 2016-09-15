'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($location, $routeParams, $scope){
            var blogItems = [
                {title: "Some Title", id: 1, description: "This is a book", publishDate: "2016-09-11"},
                 {title: "Title", id: 2, description: "This is a book"},
                  {title: "Tea", id: 3, description: "This is a book"},
                   {title: "Lite", id: 4, description: "This is a book"},
            ]


            // console.log($routeParams)
            $scope.title = "Blog " + $routeParams.id
            $scope.notFound = true
            angular.forEach(blogItems, function(post){
                if (post.id == $routeParams.id){
                  $scope.notFound = false
                  $scope.post = post
                }
            })

            if ($scope.notFound) {
                console.log("Not found")
                // change location
                $location.path("/")
            }
    }
});