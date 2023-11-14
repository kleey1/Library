function validate(){

    preventDefault();

    var validated = true;
    console.log('isValidated [initial] = ', validated);

    let AccountsMap = new Map();

    AccountsMap.set('Kleaaa', '54321');
    AccountsMap.set('admin', 'admin');

    $("#usernameSpn").html("");
    $("#passwordSpn").html("");

    const username = $("#Username").val();
    if(username.length < 3){
        $("#usernameSpn").html("Invalid username, minimum 3 characters");
        validated = false;
    }

    const password = $("#Password").val();
    if(password.length < 5){
        $("#passwordSpn").html("Invalid password, minimum 5 characters");
        validated = false;
    }
    else if(AccountsMap.get(username) == password){
    }else{
        $("#passwordSpn").html("Incorrect password");
        validated = false;
    }

    if(validated == false)
    {
        return
    }

    handleSubmit(username, password);
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
    $("#LoginBtn").click(function(){
    validate();
    window.location.href = 'Main.html';})

})
