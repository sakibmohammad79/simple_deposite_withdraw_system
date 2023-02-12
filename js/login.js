//step:1 add click event handler in the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    //step:2 get the value form the input field
    const email = document.getElementById('user-email');
    const emailText = email.value;

    //step:3 get the value form the passwordfield
    const password = document.getElementById('user-password');
    const passwordText = password.value;

    //danger: do not verify email or password in this system
    //verify email and password
    if(emailText === 'sakib@gmail.com' && passwordText === 'sakib'){
        window.location.href='bank.html';
    }
    else{
        alert('Tur tho fokir tor abar bank account. Tor ustad re jige email password ki');
    }

})