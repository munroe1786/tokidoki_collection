class CharactersController < ApplicationController
    before_action :set_character, only: [:show, :update, :destroy]
    
    def index
        @characters = Character.all 
        render json: @characters
    end

    def show
        render json: @character
    end
end
