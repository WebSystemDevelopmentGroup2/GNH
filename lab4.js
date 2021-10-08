$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "lab4.json",
        dataType: "json",
        success: function(response){

            $("#tutoring-text").html(response.text["tutoring-text"].join(""))
        }, 
        error: function(msg) {
              alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
      });
    
  });