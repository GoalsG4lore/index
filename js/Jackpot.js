var JackPotConfig = function () {

	var JackPotConf = this;

	JackPotConf.retrieveJackpot = function() {
		var tabletop = Tabletop.init({ 
				key: '13tMhyefF5Z9oy6iIFVAY_8a46QY566NHTS1V5CpJxn4', 
				simpleSheet: true,
				callback: showJackpot
		});
	}

	function showJackpot (data) {
		console.log(data)
		jackpot = data[0]["Latest Jackpot"];
		$('#jackpot').html(jackpot);
		//setInterval(function(){ JackPotConf.retrieveJackpot(); }, 60000);
	}
}