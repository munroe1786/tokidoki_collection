class FamiliesController < ApplicationController
    before_action :set_family, only: [:show, :update, :destroy]

    def index
        @families = Family.all 
        render json: @families
    end

    def show
        render json: FamilySerializer.new(@family).serialized_json
    end

    private

        def set_family
            @family = Family.find(params[:id])
        end

        def family_params
            params.require(:family).permit(:name, :photo_url)
        end
end
