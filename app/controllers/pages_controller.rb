class PagesController < ApplicationController
  def index
    type = request.env['HTTP_USER_AGENT']
    @videotype = ( type.include?("Mozilla") ? ["ogg", "moz"] : ["mov", "other"])

  end

end
