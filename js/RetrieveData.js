var RetrieveDataConfig = function () {

	var RetrieveDataConf = this;

	function retrieveData() {
		console.log("HIT")
		var tabletop = Tabletop.init({ 
				key: '13tMhyefF5Z9oy6iIFVAY_8a46QY566NHTS1V5CpJxn4', 
				callback: showData,
				// debug: true,
		});
	};

	function showData (data, object) {
		console.log(data);

		/* for jackpot */
		jackpot = data.Jackpot.elements[0]["Latest Jackpot"];
		$('#jackpot').html(jackpot);

		/* for deadline */
		deadline = data.Deadline.elements[0]["Time Until Deadline"];
		$('#countdownTimer').html(deadline);

		setTimeout(function() {
			retrieveData();
		}, 60000); //300000 MS == 5 minutes
	}

$(function() {
	retrieveData();
});

}

