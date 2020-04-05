class FamiliesController < ApplicationController
    before_action :set_family, only: [:show, :update, :destroy]

    def index
        @families = Family.all 
        render json: @families
    end

    def show
        options = {}
        options[:include] = [:characters, :'characters.name', :'characters.description', :'characters.series', :'characters.release_year', :'characters.photo_url', :'characters.family_id']
        render json: FamilySerializer.new(@family, options).serialized_json
    end

    private

        def set_family
            @family = Family.find(params[:id])
        end

        def family_params
            params.require(:family).permit(:name, :photo_url)
        end
end
