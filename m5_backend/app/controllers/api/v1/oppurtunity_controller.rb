class Api::V1::OppurtunityController < ApplicationController
    
        def index
            oppurtunities = Oppurtunity.all
            render json: oppurtunities, include: [:organization]
        end
    
        # def profile
        #     byebug
        # end
        
        def create
          oppurtunity = Oppurtunity.create(opp_params)
          render json: oppurtunity,status: 201
        end

        def update
            oppurtunity = Oppurtunity.update(opp_params)
            render json: oppurtunity,status: 201
          end

          def destroy
            oppurtunityId = @oppurtunity.id
            @oppurtunity.destroy
            render json: {message:"Deleted", oppurtunityId:oppurtunityId}
          end

          def show
            @oppurtunity = Oppurtunity.find(params[:id])
            @organization = Organization.find_by(id: @oppurtunity.organization_id)
            render json: {organization: @organization, oppurtunity: @oppurtunity}, status: 200
          end

       
        private
        def opp_params
          params.require(:oppurtunity).permit(:organization, :volunteers_needed, :date,:description)
        end
      end
