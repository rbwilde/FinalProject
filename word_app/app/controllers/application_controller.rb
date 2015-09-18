class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end

def current_user
  User.find(session[:user_id]) if session[:user_id]
end
	
	def logged_in_user
		unless logged_in?
			flash[:danger] = "Please log in."
			redirect_to login_url
		end
	end

	def logged_in?
		!current_user.nil?
	end
end
