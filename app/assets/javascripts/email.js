// $('#email').submit(function(event){
  var sender =  $('#sender'),
      subject = $('#subject'),
      content = "Thank you for contacting MannahCodes@gmail.com. We are sending this message to verify your email address. To send this message to mannahcodes@gmail.com simply 'reply' to this email."+String.fromCharCode(13)+"www.linkedin.com/in/kenikall - www.facebook.com/mannahcodes - www.twitter.com/mannahKallon - www.github.com/kenikall"+String.fromCharCode(13)+$('#content');
  var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(emailTest.test(sender) && !content.value){
    $.ajax({
      url: "https://formspree.io/"+sender,
      method: "POST",
      data: $(this).serialize(),
    })
    $(this).get(0).reset()
    //"Thanks for getting in touch! A verification email has been sent to "+sender
  }else if(!content.value){
    //"You will need to add content to the 'message' field."
  }else{
    //I'm not recognizing the email address, " +sender+ ", please try retyping."
  }
})


