class LocationsController < ApplicationController

  def index
    character_id = params[:character_id]
    @character = Character.find character_id
    @locations = @character.locations

    render json: {
      character: @character,
      locations: @locations
    }
  end

end
