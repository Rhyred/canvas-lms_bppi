# frozen_string_literal: true

class HomePageController < ApplicationController
  skip_before_action :require_user

  def index
    @page_title = "BPPI Learning Management System"
    @headers = false
    # Any shared data can be passed via js_env if needed
  end
end
