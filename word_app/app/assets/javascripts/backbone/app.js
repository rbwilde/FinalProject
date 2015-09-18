var Wordapp = Wordapp || { Models{}, Collections{}, Views{} };
var collection;

//collection of users saved words
Wordapp.initialize = function(){
	//Users saved words
	collection = new Wordapp.Collections.WordCollection();

	var listView = new Wordapp.Views.WordListView({
		collection: collection;
		el: $("savedWord-list")
	})
}



