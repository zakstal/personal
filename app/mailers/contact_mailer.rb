class ContactMailer < ActionMailer::Base
  default to: "zakstal@gmail.com"

  def contact_email(email)
    @contact_email = email[:contact_email]
    @body = email[:body]
    mail(from: @contact_email, subject: "From ZakStal.com, You Have Been Contacted!")
  end

end
