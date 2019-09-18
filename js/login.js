$(document).ready(function() {
    //Login Function
  $('.loginBtn').click(function(event) {
    event.preventDefault();
    const passwordLogin = $('#passwordLogin').val();
    const emailLogin = $('#emailLogin').val();
    if (!passwordLogin || !emailLogin) {
      $('.regMessage').html('Kindly fill in all fields');
      return;
    }
    //Check if the user is in the database
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${emailLogin}&password=${passwordLogin}`,
      data: {
        email: emailLogin,
        password: passwordLogin,
      },
      beforeSend: function() {
        $('.regMessage').html('Loading....');
      },
      success: function(response) {
        if (response.length) {
          $('.regMessage').html('Login sucessful');
          $('.checkLogin').html('You are logged in');
          localStorage.setItem('email', emailLogin);
          //redirect to home page if the login is successfull
          window.location.assign('dashboard.html');
        } else {
          $('.regMessage').html('Username or password Incorrect');
        }
      },
    });
  });
});