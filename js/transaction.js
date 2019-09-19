$(document).ready(function() {
    $(function() {
        const currentUser = localStorage.getItem("email");
        //Make get request to output the users transaction
        $.ajax({
          method: 'GET',
          url: `http://localhost:3000/users?email=${currentUser}`,
          data: {
            json
          },
          beforeSend: function() {
            $('#transMessage').html('Loading....');
          },
          success: function(response) {
            $("#showBalance").append("<p><h4>Balance:</h4>"+response.balance+"</p>");
              for(let i of response.transactions){
                  if(!i.withdraw){
                      i.withdraw = 0;
                  }

                  if(!i.deposit){
                  i.deposit = 0;
                  }
                  $("#contents").append(
                    "<tr>"+
                        "<td>"+i.id+"</td>"+
                        "<td>"+i.deposit+"</td>"+
                        "<td>"+i.withdraw+"</td>"+
                        "<td>"+i.transaction_date+"</td>"+
                        "</tr>"
                      )
                }
            }
        });
    
    });
  
});