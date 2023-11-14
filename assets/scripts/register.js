function validate(){

    preventDefault();

    var validated = true;
    console.log('isValidated [initial] = ', validated);

    class Account{

        constructor(id, name, email, password){

            if(arguments.length != 4)
            {
                throw new Error("Please, provide 3 properties")
            }
    
            this.id = id;
            this.username = username;
            this.email = email;
            this.password = password;
        }
    }

    let AccountsMap = new Map();

    AccountsMap.set('Kleaaa', '54321');
    AccountsMap.set('admin', 'admin');

    $("#userNameSpn").html("");
    $("#emailSpn").html("");
    $("#PasswordSpn").html("");

    const username = $("#userName").val();
    if(username.length < 3){
        $("#userNameSpn").html("Invalid username, minimum 3 characters");
        validated = false;
    }
    if(AccountsMap.has(username)){
        $("#userNameSpn").html("Username already exists");
        validated = false;
    }

    const email = $("#email").val();
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
    
    if(validateEmail(email)){
    }else {
        $("#emailSpn").html("Email not valid");
        validated = false;
    }

    const password = $("#Password").val();
    if(password.length < 5){
        $("#PasswordSpn").html("Invalid password, minimum 5 characters");
        validated = false;
    }

    if(validated == false)
    {
        return
    }

   /* const Accounts = [
        new Account(1, 'Kleaaa','klea@gmail.com','54321'),
        new Account(2, 'admin', 'admin@gmail.com','admin')
    ];*/

    handleSubmit(username, email, password);

}

function handleSubmit(Name, Email, Password){
    // Create Object
    var newAccount = {
        username: Name,
        email: Email,
        password: Password
    }
    console.log('newAccount Object = ', newAccount);
}


$(document).ready(function(){
    $("#RegisterBtn").click(function(){
    validate();
    window.location.href = 'Main.html';})

})
