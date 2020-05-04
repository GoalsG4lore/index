$('#aboutLink').click(function(){
	$('.home__content, .about__content').toggle();
});

$('#notificationClose').click(function(){
	$('.notification').hide();
})

/* retrieving jackpot num */

function getJackpot() {
	var tabletop = Tabletop.init({ 
  		key: '13tMhyefF5Z9oy6iIFVAY_8a46QY566NHTS1V5CpJxn4', 
  		callback: showJackpot
	});
}

function showJackpot(data) {
	jackpot = data.Jackpot.elements[0]["Latest Jackpot"];
	$('#jackpot').html(jackpot);
	setInterval(function(){ getJackpot(); }, 60000);
}

(function() {
  getJackpot();
})()