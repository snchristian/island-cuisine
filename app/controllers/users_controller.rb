class UsersController < ApplicationController
    
    def index
        @user = User.all

        render json: @dogs
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user, status: :created
        else
            render json: @user.errors, status: :unproccesable_entity
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
