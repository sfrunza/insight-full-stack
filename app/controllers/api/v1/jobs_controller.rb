class Api::V1::JobsController < ApplicationController

  def index
    customer_id = params[:customer_id]
    jobs_objects = Job.where(customer_id: customer_id)
    render json: jobs_objects
  end

end
