$(document).ready(function(){
	var $computerNumber =$('#computer_choise_number');
	var $crystalNumber = $('.crystal');
	var $result = $('#user_result');
	var counter;
	var $win = 0;
	var $loss = 0;

//раздача рандомных цифр

	function startGame(){
		counter = 0;
		$result.text('')
		$crystalNumber.empty();
		randomNumber = Math.floor(Math.random()*120) +19;
		$computerNumber.text(randomNumber);

		$crystalNumber.each(function(){
			var randomCrystalNumber = Math.floor(Math.random()*12) +1;
			$(this).attr('data-value', randomCrystalNumber);
			console.log(randomCrystalNumber);
			})
		};
		startGame();

	$crystalNumber.on("click", function(){
		var audio = $("#audio");
		audio[0].play();
		var crystalValue = ($(this).attr("data-value"));
		crystalValue = parseInt(crystalValue);
		counter +=crystalValue;
		$result.text('Your total score is: ' + counter);

		if(counter === randomNumber){
			$win +=1;
			$('#win').text("Wins:" + $win);
			startGame();
		}
		else if(counter >= randomNumber){
			$loss +=1;
			$('#loss').text("Loss: " + $loss);
			startGame();
		}
			
		})		

	});
