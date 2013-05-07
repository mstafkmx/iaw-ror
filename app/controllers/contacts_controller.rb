class ContactsController < ApplicationController
  def index
    @contact = Contact.new
  end

  def show
  end

  def new
    @contact = Contact.new
  end

  def create
    #debugger
    @contact = Contact.new
    
    if @contact.save
      render "contacts/sent"
    else
      redirect_to contacts_path, :notice => "Mensaje enviado"
    end
  end
end
