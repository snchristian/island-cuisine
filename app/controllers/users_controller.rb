class UsersController < ApplicationController
    # skip_before_action :authorized, only: [:index, :create]
    before_action :set_user, only: [:show]
    
    def index
        @users = User.all

        render json: @user
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)
    
        if @user.save
          @token = encode_token({ user_id: @user.id })
          render json: { user: @user, token: @token }, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
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
