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
    @recomendation = Recomendation.new(params[:recomendation])

    if @recomendation.save
      UserMailer.recomendation_mail(@recomendation)
      render "recomendations/sent"
    else
      redirect_to recomendations_path, :notice => "Mensaje enviado"
    end
  end

end



