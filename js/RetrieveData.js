var RetrieveDataConfig = function () {

	var RetrieveDataConf = this;
	RetrieveDataConf.jackPotData = ko.observable();
	RetrieveDataConf.countdown = ko.observable();
	RetrieveDataConf.currentGameweek = ko.observableArray([]);

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
		var currentGameweek = data["Current Gameweek"].elements;
		currentGameweek.shift() //removing first item in array (which are the headers)
		RetrieveDataConf.currentGameweek([currentGameweek])

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



