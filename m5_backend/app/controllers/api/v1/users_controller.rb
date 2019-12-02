class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def profile
        byebug
    end
    
    def create
      @user = User.create(user_params)
      if @user.valid?
        render json: { user: UserSerializer.new(@user) }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end
   
    private
    def user_params
      params.require(:user).permit(:username, :password, :name)
    end
  end


# class UsersController < ApplicationController

#     def show
#         user = User.find(params[:id])
#         render json: user
#     end

#     def create
#         user = User.create(user_params)
#         if user.valid?
#             user = user
#             token = JWT.encode({user_id: user.id}, secret, 'HS256')
#             render json: {user: user, token: token}
#         else
#             render json: {errors: user.errors.full_messages}
#         end
#     end

#     def update
#         user = User.find(params[:id])
#         user.update(user_params)
#         render json: user
#     end

#     def destroy
#         user = User.find(params[:id])
#         user.destroy
#     end

#     private

#     def user_params
#       params.require(:user).permit(:username, :password, :name)
#     end

# end