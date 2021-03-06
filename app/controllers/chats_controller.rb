class ChatsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def receive
    puts "made it to receive"
		Chat.create!(from: 1, to: 2, chat: params['Body'])

    message_body = params["Body"]
    from_number = params["From"]

    SMSLogger.log_text_message from_number, message_body
		render json: params['body']
  end

  def send_out

  	puts params



    Chat.create!(from: 2,to: 1, chat: params["body"])

  	client = Twilio::REST::Client.new 'AC035e8397a69c77b3b8e9114cd1874b76', '182b2d908203f792b47b71a403bb30cc'

  	message = client.messages.create from: '2059286659', to: '2068532262', body: params['body']
  	render plain: message.status

  end




  def all_chats
    render json: Chat.last(5)
  end

  def destroy_all_chats
    Chat.all.each do |post|
      post.destroy
    end
    render json: "chats deleted"
  end


end
