/* firing Jackpot */

var getJackpot = new JackPotConfig();
getJackpot.retrieveJackpot();

/* countdown timer */

var oneMinute = 60 * 0.25;

startTimer(oneMinute)

function startTimer(duration) {

    var timer = duration;
    timerInterval = setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
	   	$('#countdownTimer').html(minutes + ":" + seconds);

	   	console.log(timer)
	   	
	   	if (timer <= 0 ) {
	   		$('#countdownTimer').text("Gameweek deadline passed");
	   		clearInterval(timerInterval);
	   	}

	   	--timer;

    }, 1000);

}