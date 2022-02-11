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
            // console.log("jquery loaded..");
            // console.log(typeof jQuery)
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
    //console.log("Finished jQuery");

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
        rawText = rawText.replaceAll("\n", " \n ");
        rawText = rawText.replaceAll("\r", " \r ");
        readFile = rawText.split(" ");
        console.log(readFile);
        var firstbreak = 0;
        var secondbreak = 0;
        for (let index = 0; index < readFile.length; index++) {
            if (readFile[index] + " " + readFile[index+1] == "Chapter 1"){
                firstbreak = index;
            }
            if (readFile[index] + " " + readFile[index+1] == "THE END."){
                secondbreak = index + 2;
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
var startidx;
var endidx;
var stdDiff = 500;
// var prevCachePnt = 0;
// var cacheDiff;
// var prevCache = []
function runPageGet(){
    startidx = 0;
    endidx = 500;
    text1 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageNumber).textContent = "Pages 1-2"
    // if (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
    //     console.log("first block too big");
    //     while (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
    //         endidx--;
    //         text1 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageLeft).textContent = text1;
    //     }
    // } else {
    //     console.log("filling out block");
    //     while (document.querySelector(DOMstrings.pageLeft).scrollHeight < document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
    //         endidx++;
    //         text1 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageLeft).textContent = text1;
    //     }
    //     endidx--;
    //     text1 = pageSet(startidx, endidx, readFile);
    //     document.querySelector(DOMstrings.pageLeft).textContent = text1;
    // }
    // console.log("scroll height: " + document.querySelector(DOMstrings.pageLeft).scrollHeight);
    // console.log("client height: " + document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight);
    // cacheDiff = endidx - startidx;
    // prevCache[prevCachePnt] = cacheDiff;
    startidx = endidx;
    endidx = endidx + stdDiff;
    // console.log("startidx: " + startidx);
    // console.log("endidx: " + endidx);

    text2 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageRight).textContent = text2;
    // if (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
    //     console.log("second block too big");
    //     while (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
    //         endidx--;
    //         text2 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageRight).textContent = text2;
    //         console.log("size decremented")          
    //     }
    // } else {
    //     console.log("filling out second block");
    //     while (document.querySelector(DOMstrings.pageRight).scrollHeight < document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
    //         endidx++;
    //         text2 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageRight).textContent = text2;
    //     }
    //     endidx--;
    //     text2 = pageSet(startidx, endidx, readFile);
    //     document.querySelector(DOMstrings.pageRight).textContent = text2;
    // }
    // cacheDiff = endidx - startidx;
    // prevCachePnt++;
    // prevCache[prevCachePnt] = cacheDiff;
}

function pageSet(startidx, endidx, source) {
    var outtext = '';
    for (let index = startidx; index < endidx; index++){
        outtext = outtext + " " + source[index];
    }
    return outtext;
}

function nextPage(){
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    var newpg = currpg + 1
    document.cookie = "pagenum=" + newpg;
    text1 = '';
    text2 = '';
    //startidx = endidx;
    //endidx = endidx + cacheDiff;
    text1 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageNumber).textContent = "Pages " + newpg + "-" + (newpg + 1);
    // if (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
    //     console.log("first block too big");
    //     while (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
    //         endidx--;
    //         text1 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageLeft).textContent = text1;
    //     }
    // } else {
    //     console.log("filling out block");
    //     while (document.querySelector(DOMstrings.pageLeft).scrollHeight < document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
    //         endidx++;
    //         text1 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageLeft).textContent = text1;
    //     }
    //     endidx--;
    //     text1 = pageSet(startidx, endidx, readFile);
    //     document.querySelector(DOMstrings.pageLeft).textContent = text1;
    // }
    startidx = endidx;
    endidx = endidx + stdDiff;
    text2 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageRight).textContent = text2;
    // if (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
    //     console.log("second block too big");
    //     while (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
    //         endidx--;
    //         text2 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageRight).textContent = text2;
    //         console.log("size decremented")          
    //     }
    // } else {
    //     console.log("filling out second block");
    //     while (document.querySelector(DOMstrings.pageRight).scrollHeight < document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
    //         endidx++;
    //         text2 = pageSet(startidx, endidx, readFile);
    //         document.querySelector(DOMstrings.pageRight).textContent = text2;
    //     }
    //     endidx--;
    //     text2 = pageSet(startidx, endidx, readFile);
    //     document.querySelector(DOMstrings.pageRight).textContent = text2;
    // }
    // cacheDiff = endidx - startidx;
    // prevCachePnt++;
    // prevCache[prevCachePnt] = cacheDiff;
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
    document.querySelector(DOMstrings.pageRight).textContent = document.querySelector(DOMstrings.pageLeft).textContent;
    document.querySelector(DOMstrings.pageNumber).textContent = "Pages " + newpg + "-" + (newpg + 1)
    endidx = startidx - stdDiff;
    startidx = endidx - stdDiff;
    // console.log(prevCache);
    // console.log("endidx: " + endidx);
    // console.log("startidx: " + startidx);
    // console.log("prevCachePnt" + (prevCachePnt));
    // prevCachePnt--;
    text1 = pageSet(startidx, endidx, readFile);
    // cacheDiff = endidx - startidx;
    startidx = endidx;
    endidx = endidx + stdDiff;
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
}
