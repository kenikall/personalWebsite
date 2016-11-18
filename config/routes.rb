Rails.application.routes.draw do
  get 'main_page/index'
  root 'main_page#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root 'index'
end
