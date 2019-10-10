class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)

    @booking.user_id = current_user.id
    if @booking.save
      render json: @booking
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
