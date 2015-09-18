require 'pry'
require 'httparty'

word = ARGV[0];

response = HTTParty.get"https://wordsapiv1.p.mashape.com/words/#{word}",
  headers:{
    "X-Mashape-Key" => "e1NVdmQSeDmshnf1NX5Kh1F3iGEip1mxI44jsn2qgcbQc1Wbps",
    "Accept" => "application/json"
  }

body = response["results"]
def_body = body.map{|x| x.values[1] +'. '+ x.values[0]}


puts def_body

# require 'pry'
# require 'httparty'

# word = ARGV[0];

# response = HTTParty.get "https://mashape-community-urban-dictionary.p.mashape.com/define?term=#{word}",
#   headers:{
#     "X-Mashape-Key" => "e1NVdmQSeDmshnf1NX5Kh1F3iGEip1mxI44jsn2qgcbQc1Wbps",
#     "Accept" => "text/plain"
#   }

# body = response["list"]
# def_body = body.map{|x| x.values[4]}


# puts def_body