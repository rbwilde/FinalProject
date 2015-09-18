var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

Wordapp.Collections.WordsCollection = Backbone.Collection.extend({
	model: Wordapp.Models.Word,
	url: "api/words"
});
