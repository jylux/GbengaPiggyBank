$(function () {
  let currentUser = localStorage.getItem("email");
  console.log(currentUser);
	$("#submit").click(()=>{
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
    var url = `http://localhost:3000/users/?email=${currentUser}`

		$.ajax({
      method: "GET",
      url: url,
      success: function(data){
        var id = data[0].id;
        if(!firstname || !lastname){
        alert('fields cannot be blank');
        return;
        }else{
          $.ajax({
            type: "PATCH",
            url: `http://localhost:3000/users/${id}`,
            data: {
              firstname,
              lastname
            }
          })
        }
        
      }
    })

	})
})