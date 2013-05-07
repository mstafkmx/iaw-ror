class RecomendationsController < ApplicationController
  def index
    @recomendation = Recomendation.new
  end

  def show
  end

  def new
    @recomendation = Recomendation.new
  end

  def create
    @recomendation = Recomendation.new

    if @recomendation.save
      render "recomendations/sent"
    else
      redirect_to recomendations_path, :notice => "Mensaje enviado"
    end
  end
end



