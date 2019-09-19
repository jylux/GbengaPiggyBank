$(function () {
  var transArr = [];
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
  console.log(today);
  $("#submit-amount").click(()=>{
    var obj = {};
    let amount = Number($("#withdraw").val());
    let url = `http://localhost:3000/users/?email=${currentUser}`;
    let result = $("#result");
    let transaction_date = today;
    let id = transArr.length + 1;
    if (amount == null || amount == "" || !(amount > 0)) {
      alert("Invalid amount");
      return false;
    }
    else {
      $.ajax({
        method: "GET",
        url: url,
        success: function(data){
          var id = data[0].id;
          var newWithdraw = $('#withdraw').val();
          var balance = data[0].balance;
          var newBalance = parseInt(balance) - parseInt(newWithdraw);
  
            $.ajax({
              type: 'PATCH',
              url: `http://localhost:3000/users/${id}`,
              data:{
                balance : newBalance,
                withdraw : newWithdraw
              },
              success: function(){
                $('#witSuc').html('successful!')
              }
            })
          }
      })
   
  }
});
});
