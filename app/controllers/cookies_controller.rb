class CookiesController < ApplicationController
  def index
    @flavors = Cookie.all

    render json: @flavors
  end
end
