    angular.module("myApp",["ui.router"])
    .config(function($stateProvider,$urlRouterProvider){

      $urlRouterProvider.otherwise("signup");
      $stateProvider
      .state("signup",{
        url:"/signup",
        templateUrl:"template/signup.html",
        controller:"signupCtrl"
      })
      .state("main",{
        url:"/main",
        templateUrl:"template/main.html",
        controller:"mainCtrl"
      })

      .state("changePassword",{
        url:"/changePassword",
        templateUrl:"template/changePassword.html",
        controller:"passCtrl"
      })
    })
