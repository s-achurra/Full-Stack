class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow
      login(@follow)
      render "api/group/#{@follow.group_id}"
    else
    render(
      json: ["Cannot Register for Group"],
      status: 401
    )
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    if @follow
      @follow.destroy
      render "api/group/#{@follow.group_id}"
    else
      render(
        json: ["Cannot Remove Group"],
        status: 404
      )
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :group_id)
  end

end
