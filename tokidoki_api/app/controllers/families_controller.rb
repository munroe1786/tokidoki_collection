class FamiliesController < ApplicationController
    def index
        families = Family.all 
        render json: families
    end
end
