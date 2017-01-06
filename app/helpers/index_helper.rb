require 'net/smtp'

module IndexHelper


  def send_email(to,opts={})
    opts[:server]      ||= 'localhost'
    opts[:subject]     ||= "You need to see this"
    opts[:header]        ||= "Important stuff!"
    opts[:body]        ||= "Important stuff!"
    opts[:footer]        ||= "Important stuff!"

    msg = <<END_OF_MESSAGE
  From: #{K. Mannah Kallon} <#{mannahcodes@gmail.com}>
  To: <#{to}>
  Subject: #{opts[:subject]}

  #{opts[:header]}
  #{opts[:body]}
  #{opts[:footer]}
  END_OF_MESSAGE

    Net::SMTP.start(opts[:server]) do |smtp|
      smtp.send_message msg, opts[:from], to
    end
  end
end
