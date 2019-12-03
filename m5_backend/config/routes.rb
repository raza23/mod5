Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :organizations
      resources :users
      resources :oppurtunity
      resources :logs
      post '/userlogin', to: 'auth#UserCreate'
      get '/userprofile', to: 'auth#UserProfile'

      post '/orglogin', to: 'auth#OrgCreate'
      get '/orgprofile', to: 'auth#OrgProfile'
      # post '/login', to: 'auth#createOrg'

      # get '/profile', to: 'auth#OrgProfile'


    end
  end
end
