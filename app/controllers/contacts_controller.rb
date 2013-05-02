class ContactsController < ApplicationController
  def index
    @contact = Contact.new
  end

  def show
  end

  def create
    @contact = Contact.new
    if @contact.save
      redirect_to contacts_path, :notice => "Mensaje enviado"
    else
      render "contacts/index"
    end
  end
end
