class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render 'api/bookings'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def booking_params
    params.require(:booking).permit(:user_id, :listing_id, :num_guests, :start_date, :end_date)
  end
end
