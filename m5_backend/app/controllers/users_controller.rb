class UsersController < ApplicationController
    def show
        user = User.find(params[:id])
        render json: user
    end
    
    def create
        secret = "79d6ed78a4b5a068bddd5117777161ec9d05ed73df10640a918ec20958b9e02be82872b0dc5d035e6f1be500773fd87ac763e3d16f55628c50db29d9f6bcf8d5"
        user = User.create(user_params)
        if user.valid?
            user = user
            token = JWT.encode({user_id: user.id}, secret, 'HS256')
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private

    def user_params
        params.permit(:name,:username,:password)
    end

end
