var RetrieveDataConfig = function () {

	var RetrieveDataConf = this;
	RetrieveDataConf.jackPotData = ko.observable();
	RetrieveDataConf.currentGameweek = ko.observableArray([]);

	RetrieveDataConf.retrieveData = function() {
		var tabletop = Tabletop.init({ 
				key: '13tMhyefF5Z9oy6iIFVAY_8a46QY566NHTS1V5CpJxn4', 
				callback: RetrieveDataConf.callBackData,
		});
	};
		
		people = [
            { firstName: 'Bert', lastName: 'Bertington' },
            { firstName: 'Charles', lastName: 'Charlesforth' },
            { firstName: 'Denise', lastName: 'Dentiste' }
        ]
	RetrieveDataConf.callBackData = function(data) {
		/* for jackpot */
		var jackPot = data.Jackpot.elements[0]["Latest Jackpot"];
		RetrieveDataConf.jackPotData(jackPot);

		/* for current gameweek */
		var currentGameweek = data["Current Gameweek"].elements;
		currentGameweek.shift() //removing first item in array (which are the headers)
		RetrieveDataConf.currentGameweek([currentGameweek])
	};

}

$(function(){
	var fetchData = new RetrieveDataConfig();
	fetchData.retrieveData();
	ko.applyBindings(fetchData);
});



