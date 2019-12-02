class AuthController < ApplicationController
    
    def login
        # secret = '79d6ed78a4b5a068bddd5117777161ec9d05ed73df10640a918ec20958b9e02be82872b0dc5d035e6f1be500773fd87ac763e3d16f55628c50db29d9f6bcf8d5'
        user = User.find_by(username: login_params[:username])
        if user && user.authenticate(login_params[:password])
             token = JWT.encode({user_id: user.id}, secret, 'HS256')
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def profile
        # secret = '79d6ed78a4b5a068bddd5117777161ec9d05ed73df10640a918ec20958b9e02be82872b0dc5d035e6f1be500773fd87ac763e3d16f55628c50db29d9f6bcf8d5'
         if request.headers['Authorization']
            encoded_token = request.headers['Authorization'].split(' ')[1]
            # byebug
            token = JWT.decode(encoded_token, secret)
            user_id = token[0]['user_id']
            user = User.find(user_id)
            render json: user
        end
    end

    private

    def login_params
        params.permit(:username, :password)
    end

end