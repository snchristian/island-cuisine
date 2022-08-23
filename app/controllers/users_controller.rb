class UsersController < ApplicationController
   

    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: 'No active session' }, status: :unauthorized
      end
    end
  
    def create
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { error: user.errors }, status: :unprocessable_entity
      end
    end
    
    private
    
    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username,:password,:email)
    end
end
