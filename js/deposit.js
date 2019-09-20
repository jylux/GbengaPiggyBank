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
  console.log(today);
  
  $("#submit-amount").click(function() {
    var obj = {};
    let amount = parseInt($("#deposit").val());
    let url =  `http://localhost:3000/users/?email=${currentUser}`;
    let result = $("#result");
    let transaction_date = today;
    if (!amount || amount <0) {
      alert("Invalid amount");
      return false;
    }
    else {
      $.ajax({
        method: "GET",
        url: url,
        success: function(data){
          var id = data[0].id;
          var newDeposit = $('#deposit').val();
          var balance = data[0].balance;
          var deposit = data[0].deposit;
          if(balance){
            var newBalance = parseInt(balance) + parseInt(newDeposit);
            $.ajax({
              type: 'PATCH',
              url: `http://localhost:3000/users/${id}`,
              data:{
                balance : newBalance,
                deposit : newDeposit
              },
              success: function(){
                $('#depSuc').html('deposit successful')
              }
            })
          }else{
            $.ajax({
              type: 'PATCH',
              url: `http://localhost:3000/users/${id}`,
              data:{
                balance : newDeposit,
                deposit : newDeposit
              },
              success: function(){
                $('#depSuc').html('deposit successful');
                console.log('You have deposited:');
                console.log(newDeposit);
                console.log('Your new balance is:');
                console.log(newBalance);
              }
            })
          }
        }
      })
    }
  });
});
