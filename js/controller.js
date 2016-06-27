angular.module('ng-cribs')
             .controller('cribs-controller',function($scope, cribsfactory){
                  $scope.hello;

                  cribsfactory.getcribs().success(function (data) {
                    $scope.hello = data;
                  }).error(function (error) {
                     console.log(error);
                  });

                  $scope.sayhello = function () {
                     console.log("hi i said hello");
                  }
           });
