class ContactMailersController < ApplicationController
  def deliver_contact
    ContactMailer.contact_email(params[:email]).deliver
    redirect_to pages_url
  end
end
