var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

Wordapp.Models.Words = Backbone.Model.extend({
	initialize: function(options){}
});

var Word = Backbone.Model.extend({
	initialize: function(options){
		console.log(options);
	}
});

var word1 = new Word({
	word: "tartuffe",
	pronunciation: "(tar-TOOF)",
	wordtype: "noun",
	definition: "A hypocrite who feigns virtue, especially in religious matters.",
	synonyms: "hypocrite, tartufe",
	sentence: "Tony Blair is like Harold Wilson, an empty vessel whose strength derives from his emptiness. (Religion is so often a substitute for depth.) Because he is a Tartuffe who does not really believe in anything, he is brilliant at seizing advantage; when he can not manipulate events, he surfs over them."
});

var word2 = new Word({
	word: "pizzicato",
	pronunciation: "(pit-si-KA-toh)",
	wordtype: "adjective",
	definition: "Played by plucking rather than bowing the strings",
	synonyms: "finger picking",
	sentence: "It was the music of piano and the pizzicato plucking of strings—there was no pompous organ note, no ore rotundo any more."
});

var Words = Backbone.Collection.extend({
	initialize: function(options){}
});

var myWords = new Words([word1, word2]);

console.log(myWords);

