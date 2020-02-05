Rails.application.routes.draw do

  root "portfolios#index"

  resources :portfolios, onry: [:index]
end
