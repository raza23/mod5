class Api::V1::LogsController < ApplicationController
    
        def index
            @logs = Log.all
            render json: @logs, include: [:user]
        end
    
        def create
            @log = Log.find_or_create_by(user_id: params[:user_id], oppurtunity_id: params[:oppurtunity_id], clockin: params[:clockin],clockout: params[:clockout])
            render json: @log
        end
    end
