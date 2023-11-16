function validate(event){

  event.preventDefault();

  const username = $("#Username").val();
  const password = $("#Password").val();
  var validated = true;

  //var entriesJSON = localStorage.getItem('Accounts');

    console.log('isValidated [initial] = ', validated);

    let AccountsMap = new Map();

    AccountsMap.set('Kleaaa', '54321');
    AccountsMap.set('admin', 'admin');

    $("#usernameSpn").html("");
    $("#passwordSpn").html("");

    if(username.length < 3){
        $("#usernameSpn").html("Invalid username, minimum 3 characters");
        validated = false;
    }

    if(password.length < 5){
        $("#passwordSpn").html("Invalid password, minimum 5 characters");
        validated = false;
    }
    else if(AccountsMap.get(username) == null){
        $("#usernameSpn").html("This username does not have an account");
        validated = false;
    }
    else if(AccountsMap.get(username) != password){
        $("#passwordSpn").html("Incorrect password");
        validated = false;
    }

    if(validated == false)
    {
        return
    }
    handleSubmit(username, password);
    window.location.href = 'Main.html';
}


function handleSubmit(Name, Password){
    // Create Object
    var newLogin = {
        username: Name,
        password: Password
    }

    console.log('newLogin Object = ', newLogin);

}


$(document).ready(function(){
    $("#LoginBtn").click(validate);

})

