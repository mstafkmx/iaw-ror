class RecomendationsController < ApplicationController
  def index
    @recomendation = Recomendation.new
  end

  def show
  end

  def create
    @recomendation = recomendation.new
    if @recomendation.save
      redirect_to recomendations_path, :notice => "Mensaje enviado"
    else
      render "recomendations/index"
    end
  end
end



