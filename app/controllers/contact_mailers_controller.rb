class ContactMailersController < ApplicationController
  def deliver_contact
    ContactMailer.contact_email(params[:email]).deliver
    flash[:notice] = ["Your message has been sent!"]
    redirect_to pages_url
  end
end
