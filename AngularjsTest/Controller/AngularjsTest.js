// <reference path="D:\AngularjsTest\AngularjsTest\angular.min.js" />
angular.module("myapp", [])



    
        .controller("HelloController", function ($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
$scope.showMessage = function() {
   console.log("Hello!!!!!!!!");
    };
        });




    //var myApp = angular.module("myapp", []); //module and its dependencies

    //var control = function ($scope) {
    //    $scope.helloTo = {};
    //           $scope.helloTo.title = "AngularJS";
    //};

    //myApp.controller("HelloController", control); //myApp is module and control is controller function
