Rails.application.routes.draw do

  devise_for :users
  root to: 'welcome#index'

  post '/words/:id' => 'words#show'
  get '/words/search' => 'words#search_word'

end
