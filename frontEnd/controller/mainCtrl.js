angular.module("myApp")
    .controller("mainCtrl", function($scope, $http) {

            $http({
                "method": "GET",
                "url": "/signup"
            }).success(function(data, status, headers, config) {
              $scope.userData=data.data;
                console.log(data);
            }).error(function(status) {
                console.log("Status::", status);
            });

    })
