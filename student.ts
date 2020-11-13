interface Student{
    sName : string;
    fName : string;
    dob : string;
    std : string;
    sec : string;
    roll : number;
    interest : string;
}



var studentDetail : Student[] = [];

let id=0;

const butn=document.querySelector('#btn');
const nxtbtn=document.querySelector('#butn') as HTMLButtonElement;

const studName=document.querySelector('#sname') as HTMLInputElement;
const fatherName=document.querySelector('#guardianName') as HTMLInputElement;
const mobileNumber=document.querySelector('#phoneNumber') as HTMLInputElement;

const dateOfBirth=document.querySelector('#dob') as HTMLInputElement;
const standard=document.querySelector('#std') as HTMLInputElement;
const section=document.querySelector('#sec') as HTMLInputElement;
const interst=document.querySelector('#interest') as HTMLInputElement;
var rollNumber:number;

butn.addEventListener("click", (e: Event) => {
    e.preventDefault();
// var stuName:string=studName.value;
// console.log(stuName);
// var letters = (/^[A-Za_z0-9]+?([a-zA-Z0-9]+$){1}/);
// if(stuName.match(letters))
// {
//   let flag:number=0;
// }
// else
// {
//    alert("Student's name is invalied");
//    return false;
// }
//var faName:string=fatherName.value;
// if(faName.match(letters))
// {
//  return true;
// }
// else
// {
//    alert("Father's name is not valied");
//    return false;
// }
  let lengthOfPhoneNumber=mobileNumber.value.length;
if(lengthOfPhoneNumber!=10)
{
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
   var  rollNumber:number;
   if (localStorage.getItem("studentDetails") !== null) {
      studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
      studentDetail = studentDetails;
  console.log(studentDetail);
  console.log(studentDetail.length);
  let r:number=studentDetail.length;
  console.log(r);
      rollNumber=r+1;
  }
  else
     rollNumber=1;

   let obj= {
        sName : studName.value,
        fName : fatherName.value,
        dob : dateOfBirth.value,
        std : standard.value,
        sec :section.value,
        roll : rollNumber,            
        interest : interst.value
    };
    
   
    

     // if it HAS already an item, get it
     if (localStorage.getItem("studentDetails") !== null) {
        studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
     } else {
        studentDetails = [];
     }
 
     studentDetails.push(obj);
     studentDetail=studentDetails;
     console.log(studentDetail);
     localStorage.setItem("studentDetails", JSON.stringify(studentDetails));
     alert("Registration completed..");
 
});


// nxtbtn.addEventListener("click", (e: Event) => {
//     e.preventDefault();
//     localStorage.setItem("studentDetails",JSON.stringify(studentDetails))
//     window.location.href='display.html';
// });