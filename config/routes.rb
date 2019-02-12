Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'static_pages#index'
  get '/services' => 'static_pages#index'
  get '/prices' => 'static_pages#index'
  get '/work' => 'static_pages#index'


  namespace :api do
    namespace :v1 do
      resources :customers do
        resources :jobs, only: [:index]
      end

    end

  end

  resources :customers, only: [:index]
  resources :jobs, only: [:index]


end
