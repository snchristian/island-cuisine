Rails.application.routes.draw do
  resources :comments
  resources :favorite_recipes
  resources :recipes, only:[:show, :index, :create] do
    resources :comments, only:[:index,:create, :update, :delete]
  end
  resources :users 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
