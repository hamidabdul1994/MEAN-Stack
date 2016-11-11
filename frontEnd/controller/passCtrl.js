angular.module("myApp")
    .controller("passCtrl", function($scope, $http ,$state) {
      $scope.dataLoading=false;
        $scope.changePassword = function() {
          $scope.dataLoading=true;
          console.log($scope.myData);
            $http({
                "method": "PUT",
                "url": "/signup",
                "data": $scope.myData //{username:$scope.username,password:$scope.password}
            }).success(function(data, status, headers, config) {
                $scope.dataLoading=false;
                $scope.returnData=data;
                if(data.data)
                {
                $state.go("main");
                }
            }).error(function(status) {
                console.log("Status::", status);
            });
        }
    })
