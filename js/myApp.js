var app = angular.module('RockPaper', []);
app.controller('RockPaperCtrl', RockPaperCtrl);

var audio = document.getElementById("mySounds");
    audio.autoplay = true;
    audio.load();

var you=document.getElementById('you');
var com=document.getElementById('com');
var draw=document.getElementById('draw');
var tie=0;
var myScore=0;
var comScore=0;

var bgm = document.getElementById("myBgm");

function RockPaperCtrl($scope){
	$scope.user = 0;
	$scope.computer = 0;
	$scope.computerMove = false;
	$scope.computerRock = false;
	$scope.computerPaper = false;
	$scope.computerScissors = false;
	$scope.computerLizard = false;
	$scope.computerSpock = false;
	$scope.myVarRock = false;
	$scope.myVarPaper = false;
	$scope.myVarScissors = false;
	$scope.myVarLizard = false;
	$scope.myVarSpock = false;

    $scope.toggleRock = function() {
    	$scope.userChallenger = "Rock";
        $scope.myVarRock = true;
        $scope.user = 1;
        $scope.myVarPaper = false;
        $scope.myVarScissors = false;
        $scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
		$scope.initializeGame();
    }

    $scope.togglePaper = function() {
    	$scope.userChallenger = "Paper"
        $scope.myVarPaper = true;
        $scope.user = 2;
        $scope.myVarScissors = false;
        $scope.myVarRock = false;
        $scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
		$scope.initializeGame();
    }

    $scope.toggleScissors = function() {
    	$scope.userChallenger = "Scissors"
        $scope.myVarScissors = true;
        $scope.user = 3;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
		$scope.initializeGame();
    }

    $scope.toggleLizard = function() {
    	$scope.userChallenger = "Lizard"
        $scope.myVarLizard = true;
        $scope.user = 4;
        $scope.myVarScissors = false;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
		$scope.initializeGame();
    }

    $scope.toggleSpock = function() {
    	$scope.userChallenger = "Spock"
        $scope.myVarSpock = true;
        $scope.user = 5;
        $scope.myVarScissors = false;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarLizard = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
		$scope.initializeGame();
    }

	$scope.verifyChoice = function () {	
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		if (  $scope.user == 1 && $scope.computer == 2 ) {
			$scope.deviation = -1;
			myScore ++;
			$scope.computerPaper = true;
		} else if ( $scope.user == 2 && $scope.computer == 1){
			$scope.deviation = 1;
			comScore++;
			$scope.computerRock = true;
		} else if ( $scope.user == 1 && $scope.computer == 3){
			$scope.deviation = 1;
			comScore++;
			$scope.computerScissors = true;
		} else if ( $scope.user == 2 && $scope.computer == 3){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerScissors = true;
		} else if ( $scope.user == 3 && $scope.computer == 1){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerRock = true;
		} else if ( $scope.user == 3 && $scope.computer == 2){
			$scope.deviation = 1;
			comScore++;
			$scope.computerPaper = true;
		} else if ( $scope.user == 1 && $scope.computer == 4){
			$scope.deviation = 1;
			comScore++;
			$scope.computerLizard = true;
		} else if ( $scope.user == 1 && $scope.computer == 5){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerSpock = true;
		} else if ( $scope.user == 2 && $scope.computer == 4){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerLizard = true;
		} else if ( $scope.user == 2 && $scope.computer == 5){
			$scope.deviation = 1;
			comScore++;
			$scope.computerSpock = true;
		} else if ( $scope.user == 3 && $scope.computer == 4){
			$scope.deviation = 1;
			comScore++;
			$scope.computerLizard = true;
		} else if ( $scope.user == 3 && $scope.computer == 5){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerSpock = true;
		} else if ( $scope.user == 4 && $scope.computer == 1){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerRock = true;
	    } else if ( $scope.user == 4 && $scope.computer == 2){
			$scope.deviation = 1;
			comScore++;
			$scope.computerPaper = true;
		} else if ( $scope.user == 4 && $scope.computer == 3){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerScissors = true;
		} else if ( $scope.user == 4 && $scope.computer == 5){
			$scope.deviation = -1;
			comScore++;
			$scope.computerSpock = true;
		} else if ( $scope.user == 5 && $scope.computer == 1){
			$scope.deviation = 1;
			comScore++;
			$scope.computerRock = true;
		} else if ( $scope.user == 5 && $scope.computer == 2){
			$scope.deviation = -1;
			myScore ++;
			$scope.computerPaper = true;
		} else if ( $scope.user == 5 && $scope.computer == 3){
			$scope.deviation = 1;
			comScore++;
			$scope.computerScissors = true;
		} else if ( $scope.user == 5 && $scope.computer == 4){
			$scope.deviation = 1;
			myScore ++;
			$scope.computerLizard = true;
		} else {
			if($scope.computer == 1){
				$scope.computerRock = true;
			}else if($scope.computer == 2){
				$scope.computerPaper = true;
			}else if($scope.computer == 3){
				$scope.computerScissors = true;
			}else if($scope.computer == 4){
				$scope.computerLizard = true;
			}else if($scope.computer == 5){
				$scope.computerSpock = true;
			}
			tie++;
			$scope.deviation = 0;
		}
		$scope.computerMove = true;
		you.value=comScore;
		draw.value=tie;
		com.value=myScore;
		$scope.initializeGame();
	}

	$scope.restart = function() {
		$scope.myVarRock = false;
		$scope.myVarPaper = false;
		$scope.myVarScissors = false;
		$scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerMove = false;
		$scope.computerRock = false;
		$scope.computerPaper = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		you.value='0';
		draw.value='0';
		com.value='0';
		myScore=0;
		comScore=0;
		$scope.deviation = null;

	}
	$scope.initializeGame = function() {
		if(myScore==0&&comScore==0&&tie==0){
			you.value='0';
			draw.value='0';
			com.value='0';
		}
		$scope.computer = Math.floor((Math.random ()*5) + 1);
		if ($scope.computer == 1){
			$scope.computerPlayer = "Rock";
		} else if ($scope.computer == 2) {
			$scope.computerPlayer = "Paper";
		} else if ($scope.computer == 3) {
			$scope.computerPlayer = "Scissors";
		} else if ($scope.computer == 4) {
			$scope.computerPlayer = "Lizard";
		} else {
			$scope.computerPlayer = "Spock";
		}

		$scope.choice = null;
		$scope.deviation = null;
	}
	$scope.initializeGame();
	//$scope.restart();
}
