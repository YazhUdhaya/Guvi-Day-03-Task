var studentData = [{
    "Name": "Raju",
    "ID": "2001",
    "Task": "For-Loop-Iteration using of JSON- Raju",
    "Score": "8"
},
{
    "Name": "Makesh",
    "ID": "4006",
    "Task": "For-Loop-Iteration using of JSON-Makesh",
    "Score": "9"
},
{
    "Name": "Ramesh",
    "ID": "1006",
    "Task": "For-Loop-Iteration using of JSON-Ramesh",
    "Score": "10"
},
{
    "Name": "Kathir",
    "ID": "3406",
    "Task": "For-Loop-Iteration using of JSON-Kathir",
    "Score": "6"
}
];



// For loop :

console.log("1.For Loop JSON Iteration");
for (i = 0; i < studentData.length; i++) {
    var details = studentData[i];

    // Want a Particular Data means This Step

    console.log(details.Name);
    console.log(details.ID);
    console.log(details.Task);
    console.log(details.Score);

    // Want a Whole Object Data means This Step

    console.log(details);

}


// For...in loop :

console.log("2.For... in Loop JSON Iteration");
for (let val in studentData) {
    var data = studentData[val];

    // Want a Particular Data means This Step

    console.log(data.Name);
    console.log(data.ID);
    console.log(data.Task);
    console.log(data.Score);

    // Want a Whole Object Data means This Step

    console.log(data)

}


// For...of Loop :

console.log("3.For... of Loop JSON Iteration");
for (let val of studentData) {

    // Want a Particular Data means This Step

    console.log(val.Name);
    console.log(val.ID);
    console.log(val.Task);
    console.log(val.Score);

    // Want a Whole Object Data means This Step

    console.log(val);
}


//ForEach Loop : 

console.log("4.forEach Loop JSON Iteration");
studentData.forEach(function (stuInfo) {

    // Want a Particular Data means This Step

    console.log(stuInfo.Name);
    console.log(stuInfo.ID);
    console.log(stuInfo.Task);
    console.log(stuInfo.Score);

    // Want a Whole Object Data means This Step

    console.log(stuInfo);
});
