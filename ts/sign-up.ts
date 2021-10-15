import $ from 'jquery';

/* Event listeners */

$("#btn-signup").on('click', (eventData)=> {
    eventData.preventDefault();

    const fullName = $("#txt-full-name").val() as string;
    const username = $("#txt-username").val() as string;
    const password = $("#txt-password").val() as string;
    const confirmPassword = $("#txt-confirm-password").val() as string;

    if (!/^[A-Za-z ]+$/.test(fullName)){
        alert("Invalid full name");
        $("#txt-full-name").trigger('select');
        return;
    }else if(username.trim().length < 3){
        alert("Invalid username");
        $("#txt-username").trigger('select');
        return;
    }else if(password.trim().length === 0){
        alert("Invalid password");
        $("#txt-password").trigger('select');
        return;
    }else if (confirmPassword.trim().length === 0){
        alert("Invalid Password");
        $("#txt-confirm-password").trigger('select');
        return;
    }else if(password !== confirmPassword){
        alert("Password mismatch");
        $("#txt-password").trigger('select');
        return;
    }

    console.log("Okay");
});