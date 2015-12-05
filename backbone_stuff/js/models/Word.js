var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

console.log("word model constructor loaded")

Wordapp.Models.Word = Backbone.Model.extend({
	initialize: function(options){
		console.log("Word.")
	}
});


