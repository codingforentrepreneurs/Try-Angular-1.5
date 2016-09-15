'use strict';

angular.module('blogList').
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $routeParams, $scope){
            $scope.items = Post.query();
        }
    });