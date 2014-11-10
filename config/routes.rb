ZakResume::Application.routes.draw do
  resources :pages, only: [:index]
end
