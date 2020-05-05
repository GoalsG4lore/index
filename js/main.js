$('#aboutLink').click(function(){
	$('.home__content, .about__content').toggle();
});

$('#notificationClose').click(function(){
	$('.notification').hide();
})

/* retrieving jackpot num */


/* firing Jackpot */
var getJackpot = new JackPotConfig();
getJackpot.retrieveJackpot();
