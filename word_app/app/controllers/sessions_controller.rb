class SessionsController < ApplicationController
	def new
		@user = User.new
	end

	def create
		user = User.find_by(username: params[:username])
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			redirect_to posts_path
		else
			flash[:error] = "Incorrect user Name or Password"
			redirect_to(login_path)
		end
	end

	def destroy
		# reset_session
		session[:user_id] = nil
		redirect_to(login_path)
	end
end