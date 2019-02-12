var app = angular.module('testApp',[]); // this is the app tied to the html element

    app.controller('testController',function($scope,$http,$interval){ //this is the controller tied to the app
        $scope.firstName = "John"; //defines variables
        $scope.lastName = "Doe";
        $scope.changeName = function(){ //..... and functions
            $scope.firstName = "Banan-Frans";
        }
        $scope.mouseover = function(){
            $scope.firstName = "Tullebulle";
        }
        $scope.names = [{name : "Kyrre"},{name : "bjarne"}, {name : "Cecci"}];
        $http.get('http://jyme.azurewebsites.net/rest/movie/1').then(function (response){
            $scope.test = response.data;
        });
        $scope.time = new Date().toLocaleTimeString();
        $interval(function (){
            $scope.time = new Date().toLocaleTimeString();
        },1000);

    });
    app.directive("headerTestDirective",function(){ //a custom ng-directive
        return{
            template: "<h1>Made a header directive!</h1>"
        };
    });
    app.filter('secondCharacter',function(){
        return function(x){
            let v = "heihei";
           // x = setCharAt(x,1,'K');
            return v;
        };
    });