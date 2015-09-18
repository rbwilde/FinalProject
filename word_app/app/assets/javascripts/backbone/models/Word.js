var Wordapp = Wordapp || { Models{}, Collections{}, Views{} };
var collection;

WordApp.Models.Word = Backbone.Model.extend({
	initialize: function(){
		console.log("word saved");
	}
})