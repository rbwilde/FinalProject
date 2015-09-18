json.array!(@words) do |word|
  json.extract! word, :id, :word, :type, :definitions, :synonyms, :sentence
  json.url word_url(word, format: :json)
end
