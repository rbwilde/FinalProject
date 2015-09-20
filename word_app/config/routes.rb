Rails.application.routes.draw do

  devise_for :users
  root to: 'welcome#index'

  get '/words/:id' => 'words#show'
  post '/words/search' => 'words#search_word'

end
