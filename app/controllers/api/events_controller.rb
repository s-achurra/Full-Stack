class Api::EventsController < ApplicationController

  # before_action :require_logged_in, only: [:create]
  # TODO: enable require logged_in or setup on frontend

  def index
    @events = Group.all
  end

  def show
    @event = Group.find(params[:id])
  end

  def create
    @event = Group.new(event_params)
    if @event.save!
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Group.find(params[:id])

    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Group.find(params[:id])

    if @event.destroy
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

   private

   def event_params
     params.require(:event).permit(
       :title,
       :description,
       :location,
       :category,
       :date,
       :start_time,
       :end_time,
       :image_url,
       :host_id,
       :group_id
     )
   end

end
