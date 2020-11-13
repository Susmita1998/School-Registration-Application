function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    var existingUname = "Susmita1998";
    var existingPassword = "Susmita@07";
    if (username != existingUname) {
        alert("Incorrect User Name");
        return false;
    }
    else if (password != existingPassword) {
        alert("Incorrect Password");
        return false;
    }
    else {
        alert("Successfully Logged in" + "\n" + "Please press OK to move to another page");
        window.open("homePage.html");
    }
}
