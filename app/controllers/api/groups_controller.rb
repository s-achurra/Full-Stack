class Api::GroupsController < ApplicationController

  # before_action :require_logged_in, only: [:create]
  # TODO: enable require logged_in or setup on frontend

  def index
    @groups = Group.all
  end

  def show
    @group = Group.find(params[:id])
  end

  def create
    @group = Group.new(group_params)
    if @group.save!
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])

    if @group.update(group_params)
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])

    if @group.destroy
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

   private

   def group_params
     params.require(:group).permit(
       :title,
       :description,
       :location,
       :category,
       :image_url,
       :owner_id
     )
   end

end
