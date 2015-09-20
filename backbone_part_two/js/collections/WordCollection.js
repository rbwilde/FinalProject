var Wordapp = Wordapp || { Models: {}, Collections: {}, Views: {} };

Wordapp.Collections.WordCollection = Backbone.Collection.extend({
	model: Wordapp.Models.Penguin,
	apicall: function(){
		$.ajax(
		{
		    	url: "https://wordsapiv1.p.mashape.com/words/"+wordname+'"',// The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
		    	type: 'GET', // The HTTP Method
		    	datatype: 'json',
		    	success: function(data) { alert(JSON.stringify(data)); },
		    	error: function(err) { alert(err); },
		    	beforeSend: function(xhr) {
		    	xhr.setRequestHeader("X-Mashape-Authorization", "e1NVdmQSeDmshnf1NX5Kh1F3iGEip1mxI44jsn2qgcbQc1Wbps")// Enter here your Mashape key
		    	}
		})
	},
});