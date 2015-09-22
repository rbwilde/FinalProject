Rails.application.routes.draw do

  devise_for :users
  root to: 'welcome#index'

  get '/user/words/search' => 'words#user_word'
  post '/words/:id' => 'words#show'
  get '/words/search' => 'words#search_word'
  post '/user/words' => 'words#create'
  get '/user/words' => 'words#index'

  namespace :api do
  	resources :words
  	resource :user
  end		
end
