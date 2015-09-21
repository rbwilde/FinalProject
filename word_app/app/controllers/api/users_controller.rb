class Api::UsersController < ApplicationController
    respond_to :json

    def index
        users = Users.all
        render json: users
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update 
        user = User.find(params[:id])
        User.update(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        User.destroy
        render json: "user destroyed"
    end

    private

    def user_params
        params.require(:user).permit(:user)
    end
end    