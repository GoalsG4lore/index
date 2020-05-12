var RetrieveDataConfig = function () {

	var RetrieveDataConf = this;
	RetrieveDataConf.jackPotData = ko.observable();
	RetrieveDataConf.countdown = ko.observable();
	RetrieveDataConf.currentGameweek = ko.observableArray([]);

	var gameWeekArray = [];

	RetrieveDataConf.retrieveData = function() {
		var tabletop = Tabletop.init({ 
				key: '13tMhyefF5Z9oy6iIFVAY_8a46QY566NHTS1V5CpJxn4', 
				callback: RetrieveDataConf.callBackData,
		});
	};
		
	RetrieveDataConf.callBackData = function(data) {
		/* for jackpot */
		var jackPot = data.Jackpot.elements[0]["Latest Jackpot"];
		RetrieveDataConf.jackPotData(jackPot);

		/* for current gameweek */
		var currentGameweekData = data["Current Gameweek"].elements;

		for (var i = 0; i < currentGameweekData.length; i++) {
			if (currentGameweekData[i].Ref.length !== 0) {
				gameWeekArray.push(currentGameweekData[i]);
			} else {
				break;
			}
		}

		gameWeekArray.shift(); //removing first item in array (which are the headers)
		RetrieveDataConf.currentGameweek([gameWeekArray]);

		/* for countdown */
		var countdown = data["Deadline"].elements[0]["Time Until Deadline"];
		RetrieveDataConf.countdown(countdown);
	};

}

$(function(){
	var fetchData = new RetrieveDataConfig();
	fetchData.retrieveData();
	ko.applyBindings(fetchData);
});



