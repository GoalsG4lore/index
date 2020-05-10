$.ajax({
  type: 'GET',
  url: "https://api.football-data.org/v2/matches",
  headers: { Authorization: $`Bearer ${localStorage.getItem("c69c41fd021b4517b588207dd31861b2")}` },
  dataType: "jsonp",
  success: function(data){
    console.log(data);
  },
   error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },

});