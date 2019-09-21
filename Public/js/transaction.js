$(function() {
  let currentUser = localStorage.getItem("email");
  let url =  `http://localhost:3000/users/?email=${currentUser}`;
$.ajax({
  method: "GET",
  url: url,
  success: function(data){
    data.forEach(transaction => {
      var deposit = transaction.deposit;
      var withdraw = transaction.withdraw;
      var transDate = new Date();
      if(!withdraw){
                withdraw = 0;
              }
              if(!deposit){
                deposit = 0;
              }
              $("#contents").append(
                "<tr>"+
                     "<td>"+1+"</td>"+
                     "<td>"+deposit+"</td>"+
                     "<td>"+withdraw+"</td>"+
                     "<td>"+transDate+"</td>"+
                  "</tr>"
                )
    });
  }
})
});