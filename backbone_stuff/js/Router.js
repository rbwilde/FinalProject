var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };
//ANNA - Everytime I uncomment something here I get an error for an undefined function specifically .home and .getword
Wordapp.Router = Backbone.Router.extend({
	// initialize: function(){
	// this.listenTo(this.collection, 'search', this.render);
	// },

	routes: {
		// 'home': 'home',
		// 'search': 'search',
		// '*path': 'home'
	},

	// home: function(){
	// 	var view = new Wordapp.Views.home();
	// 	$('#main').html(view.render().el);
	// }

	// search: function(){
	// 	var view = new Wordapp.Views.getword();
	// 	$('#main').html(view.render().el);
	// }

});