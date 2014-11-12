# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
ZakResume::Application.initialize!

ActionMailer::Base.smtp_settings = {
  :user_name => 'zakstal',
  :password => '48dogs@thepar',
  :domain => 'http://zakwebsite.herokuapp.com/',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}
