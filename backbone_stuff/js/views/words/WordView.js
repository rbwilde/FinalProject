var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };

Wordapp.Views.WordView = Backbone.View.extend({
	initialize: function(){
		consoel.log(this);
      _.bindAll(this, 'render');
      // create a collection
      this.collection = new Word;
      // Fetch the collection and call render() method
      var that = this;
      this.collection.fetch({
        success: function () {
            that.render();
        }
      });
		// this.listenTo(this.collection, 'search', this.render);
		// this.listenTo(this.model, 'save', this.save)
	}
	// tagName: 'div',
	template: _.template( $('#word-search').html() ),
	events: {
		'click button' : 'getword'
		// 'click [data-action="save"]':'saveword'
	},

	render:function(){
		this.$el.html(this.template);
		return this;
	}

	getword: function(){
		console.log(this);
		// this.$el.find('input').on("submit", function(e){
		// 	e.preventDefault();
		// var nameField = this.$el.find('input');
		var wordname = this.$el.find('#word-search').val();
		var words = new Wordapp.Collections.Word({wordname:wordname})
		words.fetch();
		console.log(wordname);
		// var body = response["results"]
		// var def_body = body.map{|x| x.values[1] +'. '+ x.values[0]}
	}
}),