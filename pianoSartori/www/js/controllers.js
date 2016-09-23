angular.module('starter.controllers', ['ionic'])
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

.controller('PianoCtrl', ['$scope', '$state', function ($scope, $state) {
  //$cordovaNativeAudio.preloadSimple("sonido1", "sounds/sonido1.mp3");
  $scope.boton1 = function(){
    console.log("hola");
    //$cordovaNativeAudio.play("sonido1");
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
