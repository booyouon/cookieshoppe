Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :cookies, only: :index
  resources :reviews, only: :index
  post '/cookies/reviews', to: 'cookies#add_review'
  put '/cookies/reviews/:id', to: 'cookies#update_review'
  delete '/cookies/reviews/:id', to: 'cookies#destroy_review'
  # destroy '/cookies/reviews', to: 'cookies#delete_review'
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
