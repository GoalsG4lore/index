/* firing Jackpot */

var getJackpot = new JackPotConfig();
getJackpot.retrieveJackpot();

/* countdown timer */

var tenMinutes = 60 * 10;

startTimer(tenMinutes)

function startTimer(duration) {
    var timer = duration;
    setInterval(function () {
	minutes = parseInt(timer / 60, 10);
	seconds = parseInt(timer % 60, 10);
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
   	$('#countdownTimer').html(minutes + ":" + seconds);

   	--timer;

   	if (timer <= 0 ) {
   		return;
   	}

    }, 1000);

}