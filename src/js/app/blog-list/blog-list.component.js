'use strict';

angular.module('blogList').
    component('blogList', {
        // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
        templateUrl: '/templates/blog-list.html',
        controller: function($routeParams, $scope){
            console.log($routeParams)

            var blogItems = [
                {title: "Some Title", id: 1, description: "This is a book", publishDate: "2016-09-11"},
                 {title: "Title", id: 2, description: "This is a book"},
                  {title: "Tea", id: 3, description: "This is a book"},
                   {title: "Lite", id: 4, description: "This is a book"},
            ]

            $scope.items = blogItems;


            $scope.title = 'Hi there'
            $scope.clicks = 0
            $scope.someClickTest = function(){
                console.log("clicked")
                $scope.clicks += 1
                $scope.title = 'Clicked ' + $scope.clicks + ' times'
            }
        }
    });

    // controller('BlogListController', function($scope){
    //     console.log("hello")
    //     $scope.title = 'Hi there'
    //     $scope.clicks = 0
    //     $scope.someClickTest = function(){
    //         console.log("clicked")
    //         $scope.clicks += 1
    //         $scope.title = 'Clicked ' + $scope.clicks + ' times'
    //     }
    // });

    // compontent('blogList');