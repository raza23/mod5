class Api::V1::LogsController < ApplicationController
    before_action :set_log, only: [:update]
    
        def index
            @logs = Log.all
            render json: @logs, include: [:user,:oppurtunity]
        end

        def update
            # byebug
            @log.update( clockin: params["log"]["clockin"],clockout: params["log"]["clockout"])
            render json: @log, status: 200
          end
          def destroy
            
            # byebug
            @log=Log.find_by(id:params["id"])
            # byebug
            @log.destroy
            render json: @log
          end
    
        def create
            # byebug
            @log = Log.find_or_create_by(user_id: params["user"]["id"], oppurtunity_id: params["oppurtunity"]['id'], clockin: params[:clockin],clockout: params[:clockout])
            # byebug
            render json: @log
        end
        private
        def set_log
            @log = Log.find(params[:id])
          end
    end
