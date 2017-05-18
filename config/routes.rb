Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
  end

  namespace :api, defaults: { format: :json } do
    resources :groups
  end

  root to: 'static_pages#root'

end
