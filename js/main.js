$('#aboutLink').click(function(){
	$('.home__content, .about__content').toggle();
});

$('#notificationClose').click(function(){
	$('.notification').hide();
})

/* retrieving jackpot num */

function getJackpot() {
	var tabletop = Tabletop.init({ 
  		key: '1-t6S5Bnp6bKjHsQfiA82xbBRF1tCSS_wGa-NrHDnAIA', 
  		callback: showJackpot
	});
}


function showJackpot(data) {
	var jackPot = data.Sheet1.columnNames[4];
	$('#jackpot').html(jackPot);
	setInterval(function(){ getJackpot(); }, 60000);
}

(function() {
  getJackpot();
})()