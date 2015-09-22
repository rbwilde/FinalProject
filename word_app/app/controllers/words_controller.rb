require'json'
require 'uri'

class WordsController < ApplicationController

	def index
	 if current_user
	    @words = Word.where(user_id:current_user)
		@user = current_user
		@word = @user.words
		render:index
	 else
      	redirect_to login_path
    end
	end

	def user_word
		@word = current_user.words.build
		@word_search = params[:word]
		base = "https://wordsapiv1.p.mashape.com/words/"
		query = URI.encode_www_form("query" => @word_search)
		mashape = base + @word_search

		@response = HTTParty.get(mashape,
  			headers:{
   				"X-Mashape-Key" => ENV["WORD_API"],
    			"Accept" => "application/json"
  			})
  		@body = @response["results"]
		@def_body = @body.map{|x| x.values[1] +'. '+ x.values[0]}
			render :show
	end

	def show
		@word = Word.find(params[:id])
		render :user_show
	end
	
	def search_word
		@word = current_user.words.build
		@word_search = params[:word]
		base = "https://wordsapiv1.p.mashape.com/words/"
		query = URI.encode_www_form("query" => @word_search)
		mashape = base + @word_search

		@response = HTTParty.get(mashape,
  			headers:{
   				"X-Mashape-Key" => ENV["WORD_API"],
    			"Accept" => "application/json"
  			})
  		@body = @response["results"]	
		@def_body = @body.map{|x| x.values[1] +'. '+ x.values[0]}
		@syn = @body.map{|s| s.values[2]}
		@sen = @body.map{|e| e.values[5]}
			render :show
	end

	def edit
	end

	def create
		@post = current_user.words.build(word_params)
		@word = Word.create(word_params)
		redirect_to root_path
	end

	private

	def word_params
		params.require(:word).permit(:word, :user_id)
	end


end