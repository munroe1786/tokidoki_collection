class CharactersController < ApplicationController
    before_action :set_character, only: [:show, :update, :destroy]
    
    def index
        @characters = Character.all 
        render json: CharacterSerializer.new(@character).serialized_json
    end

    def show
        family = Family.find(params[:family_id])
        if family
            render json: CharacterSerializer.new(@character).serialized_json
        end
    end

    def create
        @character = Character.new(character_params)
        if @character.save
            render json: @character, status: :created, location: @character
        else
            render json: @character.errors, status: :unprocessable_entity
        end
    end

    private

        def set_character
            @character = Character.find(params[:id])
        end

        def character_params
            params.require(:character).permit(:name, :description, :series, :release_year, :photo_url, :family_id)
        end
end
