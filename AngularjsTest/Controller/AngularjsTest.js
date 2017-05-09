// <reference path="D:\AngularjsTest\AngularjsTest\angular.min.js" />
angular.module("myapp", [])



    
        .controller("HelloController", function ($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
            $scope.showDate = function () {
                console.log("Hello!!!!!!!!");
                var d = new Date();
                console.log(d.getDate());
                $scope.helloTo.showDate = d.getDate()+ '/' + (d.getMonth()+1) + '/' +d.getFullYear();
            };
            $scope.loopObjects = function () {

                $scope.names = [
        { name: 'Venky', country: 'India' },
        { name: 'Sai', country: 'USA' },
        { name: 'Gattanna', country: 'England' },
        { name: 'Yesh', country: 'Norway' },
        { name: 'Fareed', country: 'Afghanistan' },
        { name: 'Avinash', country: 'Sweden' },
        { name: 'Madhu', country: 'France' },
        { name: 'Maheshs', country: 'Finland' },
        { name: 'Swaroop', country: 'Chile' },
        { name: 'Kanthi', country: 'Peru' },
        { name: 'Pakki', country: 'Japan' },
         { name: 'Bro', country: 'China' },




                ];
    };
        });




    //var myApp = angular.module("myapp", []); //module and its dependencies

    //var control = function ($scope) {
    //    $scope.helloTo = {};
    //           $scope.helloTo.title = "AngularJS";
    //};

    //myApp.controller("HelloController", control); //myApp is module and control is controller function
