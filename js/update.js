$(document).ready(function() {
    $('#signUpBtn').click(function(event) {
        event.preventDefault();
        const firstname = $('#firstname').val();
        const lastname = $('#lastname').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const email = $('#email').val();
        //Check if user input is empty
        if (!fullname || !username || !password || !email) {
          $('.regMessage').html('Kindly fill in all fields');
          return;
        }
        //Make get request to check if the user already exist
        $.ajax({
          method: 'PUT',
          url: `http://localhost:3000/users?email=${email}`,
          data: {
            email,
          },
          beforeSend: function() {
            $('.regMessage').html('Loading....');
          },
          success: function(response) {
            if (response.length) {
              $('.regMessage').html('User already exist');
            } else {
              //Submit the user data if the user does not exist
              $.ajax({
                method: 'PATCH',
                url: 'http://localhost:3000/users',
                data: {
                  firstname,
                  lastname,
                  username,
                  email,
                  password,
                },
                beforeSend: function() {
                  $('.regMessage').html('Loading....');
                },
                success: function() {
                  $('.regMessage').html('Registration Successfull');
                  windows.location.assign('login.html')
                },
              });
            }
          },
        });
      });
    });