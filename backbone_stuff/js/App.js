console.log("linked");
var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

$(document).ready(function(){
	Wordapp.Router.Instance = new Wordapp.Router();
	Backbone.history.start();
});