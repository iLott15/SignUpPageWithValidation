function valid() {
    if (document.frm.yname.value == "") {
        document.getElementById('demo').innerHTML = "Please enter your name*";
        return false;
    } else if (document.frm.uname.value == "") {
        document.getElementById('demo').innerHTML = "Please enter your username*";
        return false;
    } else if (document.frm.mail.value == "") {
        document.getElementById('demo').innerHTML = "Please enter your mail*";
        return false;
    } else if (document.frm.pass.value == "") {
        document.getElementById('demo').innerHTML = "Please enter your password*";
        return false;
    } else if (document.frm.pass.value.length < 6) {
        document.getElementById('demo').innerHTML = "Please password should be atleast 6-digits*";
        return false;
    } else if (document.frm.pass.value.length > 12) {
        document.getElementById('demo').innerHTML = "Please password should be maximum 12-digits*";
        return false;
    } else if (document.frm.cpass.value == "") {
        document.getElementById('demo').innerHTML = "Please confirm your password*";
        return false;
    } else if (document.frm.pass.value !== document.frm.cpass.value) {
        document.getElementById('demo').innerHTML = "Your password doesn't matched*";
        return false;
    }
}