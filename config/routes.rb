Rails.application.routes.draw do
  resources :recipes
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/get-current-user" => "sessions#get_current_user"
  post "/login" => "sessions#login"
end
