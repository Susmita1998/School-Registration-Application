function validate() {
    let username=(<HTMLInputElement>document.getElementById("username")).value;
    let password=(<HTMLInputElement>document.getElementById("password")).value;
    console.log(username);
    let existingUname:string = "Susmita1998";
    let existingPassword :string= "Susmita@07";


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