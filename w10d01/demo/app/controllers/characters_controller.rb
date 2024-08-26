class CharactersController < ApplicationController

  def index
    @characters = Character.all

    # render 'index'
    render json: @characters
  end

end
