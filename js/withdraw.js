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
    $('#wdrawMessage').html(today);;
    
    $("#submitAmount").click(()=> {
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
          method: 'GET',
          url: `http://localhost:3000/users?email=${email}`,
          data: {
            email,
          },
          beforeSend: function() {
            $('.regMessage').html('Loading....');
          },
          success: function(response) {
            if (response.balance < amount) {
              return alert("Insufficient funds");
            }
            
            else {
              //Submit the user data if the user does not exist
              var transactionsArray = response["transactions"];
              var newObj = JSON.parse(transactionsArray);
              var id = newObj.length + 1;
              $("#withdraw").each(function(){
                obj['id'] = id; 
                obj['withdraw'] = amount; 
                obj['transaction_date'] = transaction_date
              });
              newArr.push(obj);
              transactionsArray = JSON.stringify(newArr);
              if (response.hasOwnProperty("balance")) {
              var newWithdrawal = Number(response.balance) - amount;
              newBalance = newWithdrawal;
              }
            else{
              alert("Error");
            }
              $.ajax({
                method: 'PUT',
                url: 'http://localhost:3000/users',
                data: {
                  balance,
                  transacstionsArray
                },
                beforeSend: function() {
                  $('#wdrawMessage').html('Loading....');
                },
                success: function(response) {
                  $('#result').html("Your Balance is:", newBalance);
                },
              });
            }
          },
        });
      });
    });