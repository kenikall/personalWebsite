$(document).ready(function(){
  $('#contactform').submit(function(event){

    event.preventDefault();
    contactform =  $('#contactform');

    var sender =  $('#sender'),
        content = $('#content');
    //logic for valid emails
    if(!sender.val() && !content.val()){
      "You will need to enter a valid email address and add content to the 'message' field to send an email."
    }else{
      $.ajax({
        url: "https://formspree.io/mannahcodes@gmail.com",
        method: "POST",
        data: contactform.serialize(),
        dataType: "json"
      })
      contactform.get(0).reset()
    }
  })
})

