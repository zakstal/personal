class ContactMailer < ActionMailer::Base
  def contact_email(email)
    @contact_email = email[:contact_email]
    @body = email[:body]
    mail(to: "zakstal@gmail.com", from: @contact_email, subject: "From ZakStal.com, You Have Been Contacted!")
  end

end
