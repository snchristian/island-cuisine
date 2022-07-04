class SessionsController < ApplicationController
    # skip_before_action :authorized

    def get_current_user
        render json: current_user
        # retrieve a token and decode that token in order to get the current dog
      end
end