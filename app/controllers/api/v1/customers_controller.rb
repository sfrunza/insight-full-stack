class Api::V1::CustomersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]

  def index
    render json: Customer.all
  end

end
