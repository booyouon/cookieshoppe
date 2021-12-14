class CookiesController < ApplicationController
  def index
    @cookies = Cookie.all

    render json: @cookies, include: :reviews, status: :ok
  end
  def show
    render json: @cookie
  end
end
