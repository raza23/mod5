class Api::V1::OrganizationsController < ApplicationController
    
        def index
            organization = Organization.all
            render json: organization
        end
    
        def profile
            byebug
        end
        
        def create
          @organization = Organization.create(org_params)
          if @organization.valid?
            render json: { organization: OrganizationSerializer.new(@organization) }, status: :created
          else
            render json: { error: 'failed to create organization' }, status: :not_acceptable
          end
        end
       
        private
        def org_params
          params.require(:organization).permit(:name, :password, :category,:site,:description,:username)
        end
      end

