angular.module('starter.controllers', ['ionic', 'ngCordova'])
.factory('login', function () {
    var logueado = false;
    var login = {};
    login.setLogueado = function (valor) {
      logueado = valor;
    };
    login.getLogueado = function () {
      return logueado;
    };
    return login;
  })
  .controller("FooterCtrl", ['$scope', '$rootScope', 'login', function ($scope, $state, login) {
    $scope.getLogueado = login.getLogueado;
  }])
  .controller('MiCuentaCtrl', ['$scope', '$state', 'login', "$ionicPopup", function ($scope, $state, login, $ionicPopup) {
    $scope.getLogueado = login.getLogueado;
    $scope.setLogueado = login.setLogueado;
    $scope.form = {}
    $scope.error = false;
    $scope.form.usuario = "";
    $scope.showAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Piano Cat',
        template: 'Ingresa con un usuario'
      });
    }
    $scope.Ingresar = function () {
      console.log("usuario: " + $scope.form.usuario);
      if ($scope.form.usuario != "") {
        $scope.setLogueado(true);
        $state.go('tab.piano');
      } else {
        $scope.showAlert();
      }
    }

  }])

.controller('PianoCtrl', ['$scope', '$state', '$cordovaVibration', '$cordovaNativeAudio', function ($scope, $state, $cordovaVibration, $cordovaNativeAudio) {
  $cordovaNativeAudio.preloadSimple("sonido1", "sounds/sonido1.mp3");
  $cordovaNativeAudio.preloadSimple("sonido2", "sounds/sonido2.mp3");
  $cordovaNativeAudio.preloadSimple("sonido3", "sounds/sonido3.mp3");
  $cordovaNativeAudio.preloadSimple("sonido4", "sounds/sonido4.mp3");
  $cordovaNativeAudio.preloadSimple("sonido5", "sounds/sonido5.mp3");
  $cordovaNativeAudio.preloadSimple("sonido6", "sounds/sonido6.mp3");
  $scope.boton1 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido1");
  }
  $scope.boton2 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido2");
  }
  $scope.boton3 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido3");
  }
  $scope.boton4 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido4");
  }
  $scope.boton5 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido5");
  }
  $scope.boton6 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido6");
  }
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AcercaDeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
