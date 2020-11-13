var sortNameBtn = document.getElementById('nam');
var sortBasedOnstd = document.getElementById('nstandardam');
var details = JSON.parse(localStorage.getItem("studentDetails"));
console.log(details);
var table = document.getElementById('myTable'); /////
function init(details) {
    for (var i = 0; i < details.length; i++) {
        var row = "<tr>\n    <td>" + details[i].roll + "</td>\n    <td>" + details[i].sName + "</td>\n    <td>" + details[i].fName + "</td>\n    <td>" + details[i].dob + "</td>\n    <td>" + details[i].std + "</td>\n    <td>" + details[i].sec + "</td>\n    <td>" + details[i].interest + "</td>\n</tr>";
        table.innerHTML += row;
    }
}
window.onload = init; ////
sortNameBtn.addEventListener("click", function (e) {
    table.innerHTML = "";
    for (var i = 0; i < details.length; i++) {
        for (var j = 0; j < details.length - 1 - i; j++) {
            if (details[j].sName > details[j + 1].sName) {
                var temp = details[j];
                details[j] = details[j + 1];
                details[j + 1] = temp;
            }
        }
    }
    console.log(details);
    init(details); ///
});
function getsortStandard(value) {
    table.innerHTML = "";
    for (var i = 0; i < details.length; i++) {
        for (var j = 0; j < details.length - 1 - i; j++) {
            if (details[j].std > details[j + 1].sName) {
                var temp_1 = details[j];
                details[j] = details[j + 1];
                details[j + 1] = temp_1;
            }
        }
    }
    var temp = [];
    for (var i = 0; i < details.length; i++) {
        if (details[i].std == value)
            temp.push(details[i]);
    }
    init(temp);
}
// function getStudentListBasedOnStandard(value){
// }
