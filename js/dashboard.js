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
                var id = data[0].id;
                var balance = data[0].balance;
                if(!balance){
                  console.log('Your balance is');
                  console.log(today);
                  console.log(0.00);
                  console.log('save some money today');
                }
                if(balance){
                    console.log('Your balance is');
                    console.log(today);
                    console.log(balance);
                }
            }
    })
    
  });