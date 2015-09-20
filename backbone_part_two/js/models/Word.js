var Wordapp = Wordapp || { Models: {}, Collections: {}, Views: {} };

Wordapp.Models.Penguin = Backbone.Model.extend({
	initialize: function(){
		console.log("Fuck you Backbone");
	},
	defaults: {
		'word': '',
		'examples': '',
		'definition': '',
		'partOfSpeech': '',
		'synonyms': '',
		'pronunciation': ''
	}
});    