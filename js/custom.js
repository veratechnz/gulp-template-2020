// custom js file

(function(){

	var app = new Vue({
	  el: '#app',
	  data: {
	   	weather: false
	  }
	})

	function makeAjaxRequest () {
		// GET request for remote image in node.js
		axios({
		  method: 'get',
		  url: 'https://api.openweathermap.org/data/2.5/onecall?lat=-41.282626&lon=-174.773390&units=metric&exclude=hourly,minute&appid=66ce6f7e945db003aaa343f0bc010dc8'
		}).then(function (response) {
		 	app.weather = response.data.daily
		 	console.log(response.data)
		 	console.log(app.weather)
		});
	}

	makeAjaxRequest()



})(); // iffe ENDS