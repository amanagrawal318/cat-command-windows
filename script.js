#!/usr/bin/env node

//  require("fs") is used to load file system module
let fs = require("fs");

// process.argv is an array containing the command line arguments which passed through command line. The first element will be 'node', the second element will be the name of the JavaScript file. So we used slice(2) which ignore these first 2 elements

let cmd = process.argv.slice(2);


// IIFE function 
(function () {
    let options = [];
    let files = [];
    let str = "";
    // To iterate a loop of command line arguments
    for (let x in cmd) {

        // if argument strt with "-" and its length i s2 then we push it to option array
        if (cmd[x].startsWith("-") && cmd[x].length == 2) {
            options.push(cmd[x]);
        }
        // else we push to files array
         else {
            files.push(cmd[x]);
            if (!fs.existsSync(cmd[x])) {
                console.log(cmd[x] + " does not exist ");
                return;
            }
        }
    }
    
    //when files array is empty that means no file is entered
    if(files.length<=0){
        console.log("File Not Entered");
        return;
    }

    //concat file string into string str
    for (let x in files) {
        str += fs.readFileSync(files[x]).toString();
    }

    //split the string into an array of string on the basis \n
    str = str.split("\n");  

    // if "-s" is given by user or not if given then called removelargespaces
    if (options.includes("-s")) {
        str = removeLargeSpace(str);
    }

    // if "-b" and "-n" both are given by user
    if (options.includes("-n") && options.includes("-b")) {
        
       // to check if index of -b is greater than -n then execute -n and call addnum
        if (options.indexOf("-b") > options.indexOf("-n")) {
            //execute -n
            str = addNum(str);
        } else {
            //execute -b
            str = addNonENum(str);
        }
    } else {
        //only one is given by user

        // if -b is given by used then execute -b
        if (options.includes("-b")) {
            // execute -b
            str = addNonENum(str);
        } else if (options.includes("-n")) {
            // execute -n
            str = addNum(str);
        }
    }

    // join on the basis of new line
    str = str.join("\n");

    //print the  resultant file content
    console.log(str);

})();

 // use for -s
function removeLargeSpace(arr) {
    // to remove all extra empty lines in an array
    let na = [];

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] == "" && arr[i + 1] == "") || (arr[i] == "\r" && arr[i + 1] == "\r")) {
        } else {
            na.push(arr[i])
        }
    }
    return na;
}

// use for -n
function addNum(arr) {
    // will add the line number on the all strings of the array
    let na = [];
    for (x in arr) {
        na[x] = (Number(x) + 1) + " " + arr[x];
    }
    return na;
}

//use for -b
function addNonENum(arr) {
    //this will add line number to non empty string of the array

    let na = [];
    let count = 1;
    for (let x in arr) {
        if (arr[x] == "\r" || arr[x] == "") {
            na[x] = arr[x];
        } else {
            na[x] = count + " " + arr[x];
            count++;
        }
    }
    return na;
}