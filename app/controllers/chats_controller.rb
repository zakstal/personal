class ChatsController < ApplicationController

  skip_before_action :verify_authenticity_token
  
  def receive

		Chat.create!(from_user_id: "me", to_user_id: "user", chat: word)
		render json: params['body']
  end

  def send_out


  	puts 'hereLSKDFLSDKFJLSDKFJSLDKFJ'
  	puts params



    Chat.create!(from_user_id: "user", to_user_id: "me", chat: params["body"])

  	client = Twilio::REST::Client.new 'AC035e8397a69c77b3b8e9114cd1874b76', '182b2d908203f792b47b71a403bb30cc'

  	message = client.messages.create from: '5102842678', to: '2068532262', body: params['body']
  	render plain: message.status
  end


  end

  def all_chats
    Chat.all.each do |post|
			post.destroy
		end
		render json: "chats deleted"
  end


end
