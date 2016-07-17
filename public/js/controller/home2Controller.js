/**
 * 
 */

app.controller('home2Controller',function($scope, $mdDialog, $mdMedia){
	var $=angular.element;
	
	var carousel = $(".carousel"),
	currdeg  = 0;

	$(".next").on("click", { d: "n" }, rotate);
	$(".prev").on("click", { d: "p" }, rotate);

	function rotate(e){
	if(e.data.d=="n"){
	currdeg = currdeg - 60;
	}
	if(e.data.d=="p"){
	currdeg = currdeg + 60;
	}
	carousel.css({
	"-webkit-transform": "rotateY("+currdeg+"deg)",
	"-moz-transform": "rotateY("+currdeg+"deg)",
	"-o-transform": "rotateY("+currdeg+"deg)",
	"transform": "rotateY("+currdeg+"deg)"
	});
	//custom dialouges
	}
	  $scope.showAdvanced = function(ev) {
	    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

	    $mdDialog.show({
	      controller: DialogController,
	      templateUrl: 'public/partials/customdialouge.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: useFullScreen
	    })
	    .then(function(answer) {
	      $scope.status = 'You said the information was "' + answer + '".';
	    }, function() {
	      $scope.status = 'You cancelled the dialog.';
	    });
	}
	
});
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  }
  }
