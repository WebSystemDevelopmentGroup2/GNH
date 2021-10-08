$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "lab4.json",
        dataType: "json",
        success: function(response){
            /*
            var message = "";
            
            $.each(responseData.text, function(i, item) {
                $.each(item.tutoring-text, function(x, s) {
                    message += s;  
                });     
            });  */
            $("#tutoring-text").html(message);
            console.log("success");
        }, 
        error: function(msg) {
              // there was a problem
              alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
      });
    
  });