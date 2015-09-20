require'json'
require'uri'

class WordsController < ApplicationController

	def index
		@words = Word.all
		puts "your saved words: " + params[:word]
	end

	def show
		@word = Word.find(params[:id])
		render :user_show
	end
	
	def search_word
		@word = current_user.words.build
		word_search = params[:word]
		base = "https://wordsapiv1.p.mashape.com/words/"
		query = URI.encode_www_form("query" => search_word)
		mashape = base + query
	binding.pry	
		@response = HTTParty.get(mashape),
  		headers:{
   		"X-Mashape-Key" => ENV["WORD_API"],
    	"Accept" => "application/json"
  		}
  		@body = response["results"]
		@def_body = body.map! do |x|
			word_attrs = {
				part_of_speech: x.values[1], 
				definition: x.values[0]
			}	
			Word.new(word_attrs)
		end		
		render :show
	end

	def edit
	end

	def create
		@post = current_user.words.build(word_params)
	end

	private

	def word_params
		params.require(:word).permit(:part_of_speech, :definition)
	end


end