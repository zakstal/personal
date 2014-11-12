ZakResume::Application.routes.draw do
  resources :pages, only: [:index]
  post "/chats/receive", to: "chats#receive"
  post "/chats/send_out", to: "chats#send_out"
  post "/chasts/all", to: "chats#all_chats"
end
