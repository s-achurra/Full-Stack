Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
  end

  namespace :api, defaults: { format: :json } do
    resources :groups, except: [:new, :edit]
  end

  namespace :api, defaults: { format: :json } do
    resources :events, except: [:new, :edit]
  end

  namespace :api, defaults: { format: :json } do
    resources :rsvps, only: [:create, :destroy]
  end

  namespace :api, defaults: { format: :json } do
    resources :follows, only: [:create, :destroy, :show]
  end

  root to: 'static_pages#root'

  get '/api/search/:query', to: 'application#search', as: 'search'

end
