class UserMailer < ActionMailer::Base
  default from: "noreply@ismamazigh.com"

  def contact_mail(contact)
    @contact = contact
    @to = ""
    mail(to: @to, subject: "New contact")
  end

  def recomendation_mail(recomendation)
    @recomendation = recomendation
    mail(to: @recomendation.mailreceiver, subject: "New recomendation")
  end
end
