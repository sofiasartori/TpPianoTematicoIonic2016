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

.controller('PianoCtrl', ['$scope', '$state', '$cordovaVibration', '$cordovaNativeAudio', '$cordovaFile', function ($scope, $state, $cordovaVibration, $cordovaNativeAudio, $cordovaFile) {
  $cordovaNativeAudio.preloadSimple("sonido1", "sounds/sonido1.mp3");
  $cordovaNativeAudio.preloadSimple("sonido2", "sounds/sonido2.mp3");
  $cordovaNativeAudio.preloadSimple("sonido3", "sounds/sonido3.mp3");
  $cordovaNativeAudio.preloadSimple("sonido4", "sounds/sonido4.mp3");
  $cordovaNativeAudio.preloadSimple("sonido5", "sounds/sonido5.mp3");
  $cordovaNativeAudio.preloadSimple("sonido6", "sounds/sonido6.mp3");
  $scope.fileName = "gatitosKawai.txt";
  $scope.datosGuardados = "";
  $scope.mostrarPiano = true;
  $scope.guardarEnDisco = function(entrada){
    $cordovaFile.checkFile(cordova.file.applicationStorageDirectory,
          $scope.fileName).then(function(success){
          console.log("successCF" + JSON.stringify(success));
              $cordovaFile.writeExistingFile(cordova.file.applicationStorageDirectory,
                $scope.fileName,entrada +", ").then(function(successWF){
              },function(errorWF){
            })
        },function(error){
          console.log("Error CheckF" + JSON.stringify(error))
          $cordovaFile.createFile(cordova.file.applicationStorageDirectory,
            $scope.fileName,false).then(function(successCF){
              console.log("Successs createF" + JSON.stringify(successCF))
              $cordovaFile.writeExistingFile(cordova.file.applicationStorageDirectory,
                $scope.fileName,entrada +", ").then(function(successWF){
                  console.log("Successs WF" + JSON.stringify(successWF))
              },function(errorWF){
                console.log("Error WF" + JSON.stringify(errorWF))
              })
            },function(errorCF){
               console.log("Error CreateF" + JSON.stringify(successCF)) 
            });          
        })
  }
  $scope.boton1 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido1");
    $scope.guardarEnDisco("sonido1");
  }
  $scope.boton2 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido2");
    $scope.guardarEnDisco("sonido2");
  }
  $scope.boton3 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido3");
    $scope.guardarEnDisco("sonido3");
  }
  $scope.boton4 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido4");
    $scope.guardarEnDisco("sonido4");
  }
  $scope.boton5 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido5");
    $scope.guardarEnDisco("sonido5");
  }
  $scope.boton6 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play("sonido6");
    $scope.guardarEnDisco("sonido6");
  }

  $scope.verMelodias= function(){
    $scope.mostrarPiano=false;
    $cordovaFile.readAsText(cordova.file.applicationStorageDirectory,
                $scope.fileName).then(function(success){
                  $scope.datosGuardados = success;
                  },function(error){
                  console.log("errorRAT: " + JSON.stringify(error));
                })
  }
  $scope.volverPiano = function(){
    $scope.mostrarPiano = true;

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
