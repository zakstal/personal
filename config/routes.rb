ZakResume::Application.routes.draw do
  root to: "pages#index"
  resources :pages, only: [:index]
  post "/contact_mailers", to: "contact_mailers#deliver_contact", as: "deliver"
  post "/chats/receive", to: "chats#receive"
  post "/chats/send_out", to: "chats#send_out"
  get "/chats/all", to: "chats#all_chats"
  get "/chats/destroy_all_chats", to: "chats#destroy_all_chats"
end
