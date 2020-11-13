interface Student{
    sName : string;
    fName : string;
    dob : string;
    std : string;
    sec : string;
    roll : number;
    interest : string;
}

const sortNameBtn=(<HTMLInputElement>document.getElementById('nam'));

const sortBasedOnstd=(<HTMLInputElement>document.getElementById('nstandardam'));

let details : Student[] = <Student[]> JSON.parse(localStorage.getItem("studentDetails"));

console.log(details);

let table = document.getElementById('myTable')!;/////
function init(details){
for (let i=0 ;i<details.length;i++){
    let row = `<tr>
    <td>${details[i].roll}</td>
    <td>${details[i].sName}</td>
    <td>${details[i].fName}</td>
    <td>${details[i].dob}</td>
    <td>${details[i].std}</td>
    <td>${details[i].sec}</td>
    <td>${details[i].interest}</td>
</tr>`;

table.innerHTML+=row;
}
}

window.onload= init;////

sortNameBtn.addEventListener("click", (e: Event) => {
    table.innerHTML=``;
   for( let i=0 ;i<details.length;i++){
       for( let j=0;j<details.length-1-i;j++){
           if(details[j].sName>details[j+1].sName){
               let temp =details[j];
               details[j]=details[j+1];
               details[j+1]=temp;
           }
       }
   }
   console.log(details);
   init(details)///
});
function getsortStandard(value)
{
    table.innerHTML=``;
    for( let i=0 ;i<details.length;i++){
        for( let j=0;j<details.length-1-i;j++){
            if(details[j].std>details[j+1].sName){
                let temp =details[j];
                details[j]=details[j+1];
                details[j+1]=temp;
            }
        }
    }
    let temp : Student[] =[];
    for( let i=0 ;i<details.length;i++)
    {
        if(details[i].std==value)
          temp.push(details[i]);
    } 
    init(temp)
}
// function getStudentListBasedOnStandard(value){
// }