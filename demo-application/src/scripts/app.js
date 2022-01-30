import $ from 'jquery';
import raw from 'raw.macro';

var DOMstrings = {
    pageNumber: '.page-number',
    pageLeft: '.page-left',
    pageRight: '.page-right'
};

var jsFileLocation;
var readFile;
var RespType;
var FileType;

export function AppStartUp() {
    //document.querySelector(DOMstrings.pageNumber).textContent = 'Page 1-2';
    //document.addEventListener("DOMContentLoaded", importFileStage(importFile));
    awaitJQuery(loadApp);
}

function awaitJQuery(callback) {
    var waitForLoad = function () {
        if (typeof jQuery != "undefined") {
            console.log("jquery loaded..");
            console.log(typeof jQuery)
            callback()
            // invoke any methods defined in your JS files to begin execution       
        } else {
            console.log("jquery not loaded..");
            window.setTimeout(waitForLoad, 500);
        }
    };
    window.setTimeout(waitForLoad, 500); 
}

function loadApp(){
    console.log("Finished jQuery");

    document.getElementById("nextpage").addEventListener("click", nextPage);
    document.getElementById("backpage").addEventListener("click", backPage);
    //document.addEventListener("DOMContentLoaded", runPageGet);

    document.cookie = "pagenum=1";

    readFile = [];
    RespType = "blob";
    FileType = "text/plain";
    importFileStage(importFile);
}

function importFileStage(callback) {
    console.log("importing file...")
    awaitJQuery(callback);
}


function handleFile(X, fileloc){
    //var blobUri = URL.createObjectURL(new Blob([X], {type: "text/plain"}));
    const fileReader = new FileReader();
    fileReader.readAsText(new Blob([X], {type: "text/plain"}));
    fileReader.onload = function(e) {
        var rawText = raw('../scripts/73.txt');
        //console.log(rawText);
        rawText = rawText.replaceAll("\n", " ");
        rawText = rawText.replaceAll("\r", " ");
        readFile = rawText.split(" ");
        console.log(readFile);
        var firstbreak = 0;
        var secondbreak = 0;
        for (let index = 0; index < readFile.length; index++) {
            if (readFile[index] + " " + readFile[index+1] == "Chapter 1"){
                firstbreak = index + 2;
            }
            if (readFile[index] + " " + readFile[index+1] == "THE END."){
                secondbreak = index;
            }
        }
        console.log(firstbreak);
        console.log(secondbreak);
        readFile = readFile.slice(firstbreak, secondbreak);
        console.log("File Read.  First word: " + readFile[0]);
        runPageGet();
    };
}

function importFile(){
    var AJAXFileReadder = new XMLHttpRequest();
    
    AJAXFileReadder.addEventListener("load", function Finished(){
        if ((this.readyState==4)&&(this.status==200)){
            handleFile(this.response, jsFileLocation);
        }
    }, false);

    jsFileLocation = $('script[src*=app]').attr('src');
    jsFileLocation = jsFileLocation.replace("app.js", "");
    jsFileLocation = jsFileLocation + "73.txt";
    RespType = "blob";
    FileType = "text/plain";
    console.log("File Location: " + jsFileLocation)
    console.log("FileType: " + FileType);
    console.log("RespType: " + RespType);
    AJAXFileReadder.open("GET", jsFileLocation, true);
    AJAXFileReadder.overrideMimeType(FileType);
    AJAXFileReadder.responseType=RespType;
    AJAXFileReadder.timeout=10000;

    AJAXFileReadder.send();
}

// function runPyPageGet(){
//     return runPyPageGetter(()=>{
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${pagenum}=`);
//         if (parts.length === 2) return int(parts.pop().split(';').shift())
//     })
// }

// function runPyPageGetter(input){
//     var textGetter = $.ajax({
//         type: "POST",
//         url: "/page",
//         async: false,
//         data: {mydata: input}
//     });
//     return textGetter.responseText;
// }

// var someText = runPyPageGetter(()=>{
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${'pagenum'}=`);
//     if (parts.length === 2) return int(parts.pop().split(';').shift())
// })

/**var someText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
    + "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
    + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
    + "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
    + "culpa qui officia deserunt mollit anim id est laborum.";**/

var text1 = '';
var text2 = '';
function runPageGet(){
    for (let index = 0; index < 400; index++){
        text1 = text1 + " " + readFile[index];
    }
    for (let index = 400; index < 800; index++){
        text2 = text2 + " " + readFile[index];
    }
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageRight).textContent = text2;
}

function nextPage(){
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    var newpg = currpg + 1
    document.cookie = "pagenum=" + newpg;
    text1 = '';
    text2 = '';
    for (let index = (newpg - 1)*400; index < newpg*400; index++){
        text1 = text1 + " " + readFile[index];
    }
    for (let index = newpg*400; index < (newpg+1)*400; index++){
        text2 = text2 + " " + readFile[index];
    }
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageRight).textContent = text2;
}

function backPage(){
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    var newpg = currpg - 1
    if (newpg <= 0){
        return;
    }
    document.cookie = "pagenum=" + newpg;
    text1 = '';
    text2 = '';
    for (let index = (newpg - 1)*400; index < newpg*400; index++){
        text1 = text1 + " " + readFile[index];
    }
    for (let index = newpg*400; index < (newpg+1)*400; index++){
        text2 = text2 + " " + readFile[index];
    }
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageRight).textContent = text2;
}
