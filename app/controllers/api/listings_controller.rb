class Api::ListingsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    render :index
  end

  def create
    @listing = Listing.create!()
  end

  def show
    @listing = Listing.find(params[:id])
  end

  private
  def listing_params
    params.require(:listing).permit(
      :title,
      :description,
      :price,
      :location,
      :lng,
      :lat,
      :num_bed,
      :num_bath,
      :max_guests,
      :home_type
    )
  end

  def bounds
    params[:bounds]
  end
end
