// custom js file

(function(){

	function makeAjaxRequest () {
		// GET request for remote image in node.js
		axios({
		  method: 'get',
		  url: 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minute&appid=66ce6f7e945db003aaa343f0bc010dc8'
		}).then(function (response) {
		 	console.log(response.data)
		});
	}

	makeAjaxRequest()

})(); // iffe ENDS