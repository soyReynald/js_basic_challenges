function sum (arg1, arg2) {
    return arg1 + arg2;
}


// document.querySelector("#result").innerHTML = sum (78, 26);
// 4

//! Task from the university
const headers = ["Language", "Year", "Description"];
const information = ["MySQL", "1995", "Is a database management system and it works in the serverside; It gives you the opportunity to save data and retrieve data by columns and rows, you can also use foreign keys as well as indexes; Also it has much time in the market so the documentation is very well known."];

function matriz (data) {
    // First finish here
    for (let i = 0; i < data.length; i++) {
        document.querySelector("#matrix #container #headers").innerHTML += "<div class='container-header'>"+headers[i]+"</div class='container-header'>";
    }

    // Ten finish here
    for (let i = 0; i < data.length; i++) {
        document.querySelector("#matrix #container #information").innerHTML += "<div class='container-body'>"+data[i]+"</div class='container-body'>";
    }
}

// matriz(information);

/*
* To make a constant that 
* makes an array an adds a character 
* without error.
*/

const challengedArray = ["Colors", "Red", "Black"];

//! Uncaught Element

// challengedArray.push("user"); // thrown Uncaugh element
challengedArray[challengedArray.length] = "user";
var htmlToAppend = "";
challengedArray.forEach (data => {
    htmlToAppend += `<p>
    ${data}
    </p>`;
});
document.querySelector(".result-2.const").innerHTML = htmlToAppend;
document.querySelector(".result-2.const").previousElementSibling.innerHTML += "Array showcase";