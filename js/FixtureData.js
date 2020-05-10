console.log("HIT")
$.ajax({
  type: 'GET',
  url: "https://api.football-data.org/v2/matches",
  headers: { Authorization: $`Bearer ${localStorage.getItem("c69c41fd021b4517b588207dd31861b2")}` },

  success: function(result){
    console.log(result);
  }

});