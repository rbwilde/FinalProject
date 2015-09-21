var Wordapp = Wordapp || { Models: {}, Collections: {}, Views: {} };

Wordapp.Views.WordView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render )
	},
	tagName: 'div',
	template: _.template( $('#word-template').html() ),
	inputTemplate: _.template($('#search-template').html()),
	events: {
		'click button' : 'getword'
	},
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));

		return this
	},
	destroyPenguin: function(e){
		e.preventDefault();
		this.model.destroy();
	},
	getword: function(){
		
		var wordname = this.$el.find('#word-search').val();
		var words = new Wordapp.Collections.Word({wordname:wordname})
		words.fetch();
		console.log(wordname);
		// var body = response["results"]
		// var def_body = body.map{|x| x.values[1] +'. '+ x.values[0]}
	
		var self = this;
		this.$el.html(this.inputTemplate( this.model.attributes ));

		//Event listeners for the form and cancel button
		this.$el.find('form').on("submit", function(e){
			e.preventDefault();
			var nameField = self.$el.find('input');
			var newName = nameField.val();
			// nameField.val('');
			// to test what 'this' is in the current scope
			// console.log(this);
			self.model.set('name', newName);
			self.model.save();
		})

		this.$el.find('button').on('click', function(e){
			e.preventDefault;
			self.render();
		})
	},
	hoverOn: function(){
		this.$el.css("color", "#2ecc71");

		return this;
	},
	hoverOff: function(){
		this.$el.css("color", "#34495e");

		return this;
	}
});
