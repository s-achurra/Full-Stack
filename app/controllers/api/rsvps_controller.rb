class Api::RsvpsController < ApplicationController
  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      render :show
    else
    render(
      json: ["Cannot Register for Event"],
      status: 401
    )
    end
  end

  def destroy
    @rsvp = Rsvp.find_by(id: params[:id])
    if @rsvp.destroy
      render :show
    else
      render(
        json: ["Cannot Remove Event"],
        status: 404
      )
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id)
  end

end
