class ChatsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def receive
    puts "made it to receive"
		Chat.create!(from: "me", to: "user", chat: params['body'])

    message_body = params["Body"]
    from_number = params["From"]

    SMSLogger.log_text_message from_number, message_body
		render json: params['body']
  end

  def send_out

  	puts params



    Chat.create!(from: "user", to: "me", chat: params["body"])

  	client = Twilio::REST::Client.new 'AC035e8397a69c77b3b8e9114cd1874b76', '182b2d908203f792b47b71a403bb30cc'

  	message = client.messages.create from: '5102842678', to: '2068532262', body: params['body']
  	render plain: message.status

  end




  def all_chats
    Chat.all
  end

  def destroy_all_chats
    Chat.all.each do |post|
      post.destroy
    end
    render json: "chats deleted"
  end


end
