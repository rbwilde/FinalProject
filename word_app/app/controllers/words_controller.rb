require('json')

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
	binding.pry
		@response = HTTParty.get"https://wordsapiv1.p.mashape.com/words/"+ params[:word],
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