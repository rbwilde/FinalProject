var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

WordApp.Views.Home = Backbone.View.extend({
	initialize: function(options){},

	render: function()
	{
		this.$el.html("Word.");
		return this;
	}
});