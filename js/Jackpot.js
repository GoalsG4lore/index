var JackPotConfig = function () {

	var JackPotConf = this;

	JackPotConf.retrieveJackpot = function() {
		var tabletop = Tabletop.init({ 
				key: '13tMhyefF5Z9oy6iIFVAY_8a46QY566NHTS1V5CpJxn4', 
				callback: showJackpot,
				// debug: true,
		});
	}

	function showJackpot (data, object) {
		jackpot = data.Jackpot.elements[0]["Latest Jackpot"];
		$('#jackpot').html(jackpot);
	}
}