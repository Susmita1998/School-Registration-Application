var studentDetail = [];
var id = 0;
var butn = document.querySelector('#btn');
var nxtbtn = document.querySelector('#butn');
var studName = document.querySelector('#sname');
var fatherName = document.querySelector('#guardianName');
var mobileNumber = document.querySelector('#phoneNumber');
var dateOfBirth = document.querySelector('#dob');
var standard = document.querySelector('#std');
var section = document.querySelector('#sec');
var interst = document.querySelector('#interest');
var rollNumber;
butn.addEventListener("click", function (e) {
    e.preventDefault();
    // var stuName = studName.value;
    // console.log(stuName);
    // var letters = (/^[A-Za_z0-9]+?([a-zA-Z0-9]+$){1}/);
    // if (console.log(stuName.match(letters))) {
    //     var flag = 0;
    // }
    // else {
    //     alert("Student's name is invalied");
    //     return false;
    // }
    // var faName:string=fatherName.value;
    // if(faName.match(letters))
    // {
    //  return true;
    // }
    // else
    // {
    //    alert("Father's name is not valied");
    //    return false;
    // }
    var lengthOfPhoneNumber = mobileNumber.value.length;
    if (lengthOfPhoneNumber != 10) {
        alert("Mobile number must contain 10 digits");
        return false;
    }
    //  let idString = id.toString();
    //  let temp : string ="SID0";
    //  let srn : string = temp + idString;
    // console.log(idString);
    // if(mobileNumber!=10)
    // {
    //     alert("Mobile number must contain 10 digits");
    //     return false;
    // }
    var studentDetails;
    var rollNumber;
    if (localStorage.getItem("studentDetails") !== null) {
        studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
        studentDetail = studentDetails;
        console.log(studentDetail);
        console.log(studentDetail.length);
        var r = studentDetail.length;
        console.log(r);
        rollNumber = r + 1;
    }
    else
        rollNumber = 1;
    var obj = {
        sName: studName.value,
        fName: fatherName.value,
        dob: dateOfBirth.value,
        std: standard.value,
        sec: section.value,
        roll: rollNumber,
        interest: interst.value
    };
    // if it HAS already an item, get it
    if (localStorage.getItem("studentDetails") !== null) {
        studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
    }
    else {
        studentDetails = [];
    }
    studentDetails.push(obj);
    studentDetail = studentDetails;
    console.log(studentDetail);
    localStorage.setItem("studentDetails", JSON.stringify(studentDetails));
    alert("Registration completed..");
    // console.log(srn);
});
// nxtbtn.addEventListener("click", (e: Event) => {
//     e.preventDefault();
//     localStorage.setItem("studentDetails",JSON.stringify(studentDetails))
//     window.location.href='display.html';
// });
