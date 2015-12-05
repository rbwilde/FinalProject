var Wordapp = Wordapp || { Models:{}, Collections:{}, Views:{}, Router:{} };


 Wordapp.singleword = Backbone.View.extend
Wordapp.Views.WordView = Backbone.View.extend({
	initialize: function(){
	//ANNA - THIS IS SOMMETHING I WAS TRYING
		console.log(this);
      _.bindAll(this, 'render');
      // create a collection
      this.collection = new Word;
      // Fetch the collection and call render() method
      var that = this;
      this.collection.fetch({
        success: function () {
            that.render();
        }
     //ANNA - THIS IS WHAT I ORIGINALLY HAD HERE
		// this.listenTo(this.collection, 'search', this.render);
		// this.listenTo(this.model, 'save', this.save)
      });
	}
	// tagName: 'div', //dont need this already a div
	template: _.template( $('#word-search').html() ),
	events: {
		'click search' : 'getword'
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