Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :users

  resource :session

  get "info", to: "pages#info"
  get "donate", to: "pages#donate"
  get "terms", to: "pages#terms"
  get "privacy_policy", to: "pages#privacy_policy"
  get "cookies_policy", to: "pages#cookies_policy"

  root "pages#home"

end
