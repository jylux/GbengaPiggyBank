$(document).ready(function() {
  $(function () {
    let currentUser = localStorage.getItem("email");
    console.log(currentUser);
  
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    
    if (day < 10) {
      day = "0" + day;
    }
    if(month <10){
      month = "0" + month;
    }
    today = day + "-" + month + "-" + year;
    console.log(today);
    
    $("#submitAmount").click(function addTransactions(deposit) {
      let obj = {};
      let amount = parseInt($("#deposit").val());
      let url =  `http://localhost:3000/users/?email=${currentUser}`;
      let transaction_date = today;
      if (!amount || amont < 0) {
        alert("Invalid amount");
        return false;
      }
      else {
        $.ajax({
          method: "GET",
          url: url,
          data: {json,
          }, beforeSend: function() {
          $('.regMessage').html('Loading....');
          },
          success: function(response) {
          var transArray = response["transactions"];
          var newArr = JSON.parse(transArray);
          var id = newArr.length + 1;
          $("#deposit").each(function(){
            obj['id'] = id,
            obj['deposit'] = amount,
            obj['transaction_date'] = transaction_date;
          });
          newArr.push(obj);
          transArray = JSON.stringify(newArr);
  
          if (response.hasOwnProperty("balance")) {
          var newBalance = 0;
          var newDeposit = parseInt(response.balance) + amount;
          newBalance += newDeposit;
          }
          else{
            alert("Error");
          }
          $.ajax({
          method: "PUT",
          url: `http://localhost:3000/users/${response.id}`,
          data: {
            newBalance,
            transactionsArray
          },
           beforeSend: function() {
            $('.regMessage').html('Loading....');
           },
            success: function(response){
           $('#regMessage').html('Successful Deposit');
          $('#result').html("Your Balance is: " + newBalance)
          });
          });
        }
    });
  });
}); 