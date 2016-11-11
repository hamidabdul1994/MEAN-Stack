angular.module("myApp")
    .controller("signupCtrl", function($scope, $http ,$state) {

        $scope.signup = function() {

            $http({
                "method": "POST",
                "url": "/signup",
                "data": $scope.data
            }).success(function(data, status, headers, config) {
                console.log(data);
                $state.go("main");
            }).error(function(status) {
                console.log("Status::", status);
            });
        }
    })
