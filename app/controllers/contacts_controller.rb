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
    @contact = Contact.new(params[:contact])
    
    if @contact.save
      UserMailer.contact_mail(@contact)
      render "contacts/sent"
    else
      redirect_to contacts_path, :notice => "Mensaje no enviado"
    end
  end

  #private
  #def contact_params
  #  params.require(:contact).permit(:name, :mail, :country, :message)
  #end
end
