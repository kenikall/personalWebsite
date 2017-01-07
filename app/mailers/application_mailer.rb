class ApplicationMailer < ActionMailer::Base
  default from: 'mannahcodes@gmail.com'

  def contact_email(message)
    @message = message
    mail(
      to: @message.email,
      subject: @message.subject,
      header: "Thank you for contacting MannahCodes@gmail.com. We are sending this message to verify your email address. To send this message to mannahcodes@gmail.com simply 'reply' to this email.",
      message: @message.body,
      footer: "www.linkedin.com/in/kenikall - www.facebook.com/mannahcodes - www.twitter.com/mannahKallon - www.github.com/kenikall"
      )
  end
end
