var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

Wordapp.Router = Backbone.Router.extend({

	routes: {
		// 'home': 'home',
		'search': 'search',
		'*path': 'home'
	},

	// home: function(){
	// 	var view = new Wordapp.Views.home();
	// 	$('#main').html(view.render().el);
	// }

	// search: function(){
	// 	var view = new Wordapp.Views.WordView();
	// 	$('#main').html(view.render().el);
	// }

});