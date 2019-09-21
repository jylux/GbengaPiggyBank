$(function () {
    let currentUser = localStorage.getItem("email");
    console.log(currentUser);
  
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    
    if (day < 10) {
      day = "0" + day;
    }
    if(month <10){
      month = "0" + month;
    }
    today = day + "-" + month + "-" + year;
    
    $.ajax({
              method: "GET",
              url: url,
              success: function(data){
                var balance = data[0].balance;
                if(!balance){
                    $('#dashboard1').html('Your balance as at today is');
                    $('#dashboard2').html(0.00);
                    $('#dashboard3').html('save some money today');
                }
                if(balance){
                    $('#dashboard1').html('Your balance as at today is');
                    $('#dashboard2').html(balance);
                    $('#dashboard3').html('Great! Keep on saving');
                }
            }
    })
    
  });