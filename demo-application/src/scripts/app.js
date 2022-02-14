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
var startidx;
var endidx;
var prevCachePnt = 0;
var cacheDiff;
var prevCache = []
function runPageGet(){
    startidx = 0;
    endidx = 400;
    text1 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    if (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
        console.log("first block too big");
        while (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
            endidx--;
            text1 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageLeft).textContent = text1;
        }
    } else {
        console.log("filling out block");
        while (document.querySelector(DOMstrings.pageLeft).scrollHeight < document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
            endidx++;
            text1 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageLeft).textContent = text1;
        }
        endidx--;
        text1 = pageSet(startidx, endidx, readFile);
        document.querySelector(DOMstrings.pageLeft).textContent = text1;
    }
    console.log("scroll height: " + document.querySelector(DOMstrings.pageLeft).scrollHeight);
    console.log("client height: " + document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight);
    cacheDiff = endidx - startidx;
    prevCache[prevCachePnt] = cacheDiff;
    startidx = endidx;
    endidx = endidx + cacheDiff;
    console.log("startidx: " + startidx);
    console.log("endidx: " + endidx);


    text2 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageRight).textContent = text2;
    if (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
        console.log("second block too big");
        while (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
            endidx--;
            text2 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageRight).textContent = text2;
            console.log("size decremented")
        }
    } else {
        console.log("filling out second block");
        while (document.querySelector(DOMstrings.pageRight).scrollHeight < document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
            endidx++;
            text2 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageRight).textContent = text2;
        }
        endidx--;
        text2 = pageSet(startidx, endidx, readFile);
        document.querySelector(DOMstrings.pageRight).textContent = text2;
    }
    cacheDiff = endidx - startidx;
    prevCachePnt++;
    prevCache[prevCachePnt] = cacheDiff;
}


function pageSet(startidx, endidx, source) {
    var outtext = '';
    for (let index = startidx; index < endidx; index++){
        outtext = outtext + " " + source[index];
    }
    return outtext;
}

//highlights words on one click
$(document).ready(function() {

    var point = $('p');
    point.css({ cursor: 'pointer' });

    point.click(function(e) {

        //finds range of selected word
        var selection = window.getSelection() || document.getSelection()
        || document.selection.createRange();
        var range = selection.getRangeAt(0);
        var node = selection.anchorNode;

        //keeps track if there is a - in a word before the selected letter
        var counter = 0;
        while(range.toString().indexOf(' ') != 0) {
            if(/^[-]*$/.test(range.toString().charAt(0))) {
                counter++;
                if(counter == 2) {
                    break;
                }
            }
            range.setStart(node, (range.startOffset - 1));
        }
        range.setStart(node, range.startOffset + 1);

        //keeps track if there is a - in a word after the selected letter
        const countUp = 0;
        while(range.toString().indexOf(' ') == -1 && range.toString().trim() != '' &&
            range.endOffset + 1 < selection.baseNode.wholeText.length) {
            if(/^[-]*$/.test(range.toString().charAt(range.toString().length - 1))) {
                counter++;
                if(counter == 2) {
                    break;
                }
            }
            range.setEnd(node, range.endOffset + 1);
        }

        //No highlighted space after word
        range.setEnd(node, range.endOffset - 1);

        //removes end puncuation from highlighted word
        while (1) {
            const endChar = range.toString().charAt(range.toString().length - 1);
            if (!/^[a-zA-Z0-9']*$/.test(endChar)) {
                range.setEnd(node, range.endOffset - 1);
            } else {
                break;
            }
        }

        //removes quotations at beginning of highlighted word
        const startChar = range.toString().charAt(0);
        if(!/^[a-zA-Z0-9']*$/.test(startChar)) {
            range.setStart(node, range.startOffset + 1);
        }

        //checks if word has -- before or after clicked letter

        var text = $.trim(selection.toString());
        selection.collapse();
        e.stopPropagation();
    });

});

//Takes away triple click
document.querySelector('div').addEventListener('click', function (evt) {
    if (evt.detail >= 3) {
        var rem = window.getSelection();
        rem.removeAllRanges();
    }
});


function nextPage(){
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    var newpg = currpg + 1;
    document.cookie = "pagenum=" + newpg;
    text1 = '';
    text2 = '';
    //startidx = endidx;
    //endidx = endidx + cacheDiff;
    text1 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    if (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
        console.log("first block too big");
        while (document.querySelector(DOMstrings.pageLeft).scrollHeight > document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
            endidx--;
            text1 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageLeft).textContent = text1;
        }
    } else {
        console.log("filling out block");
        while (document.querySelector(DOMstrings.pageLeft).scrollHeight < document.querySelector(DOMstrings.pageLeft).parentElement.clientHeight) {
            endidx++;
            text1 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageLeft).textContent = text1;
        }
        endidx--;
        text1 = pageSet(startidx, endidx, readFile);
        document.querySelector(DOMstrings.pageLeft).textContent = text1;
    }
    startidx = endidx;
    endidx = endidx + cacheDiff;
    text2 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageRight).textContent = text2;
    if (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
        console.log("second block too big");
        while (document.querySelector(DOMstrings.pageRight).scrollHeight > document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
            endidx--;
            text2 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageRight).textContent = text2;
            console.log("size decremented")
        }
    } else {
        console.log("filling out second block");
        while (document.querySelector(DOMstrings.pageRight).scrollHeight < document.querySelector(DOMstrings.pageRight).parentElement.clientHeight) {
            endidx++;
            text2 = pageSet(startidx, endidx, readFile);
            document.querySelector(DOMstrings.pageRight).textContent = text2;
        }
        endidx--;
        text2 = pageSet(startidx, endidx, readFile);
        document.querySelector(DOMstrings.pageRight).textContent = text2;
    }
    cacheDiff = endidx - startidx;
    prevCachePnt++;
    prevCache[prevCachePnt] = cacheDiff;
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
    endidx = startidx - prevCache[prevCachePnt - 1];
    startidx = endidx - prevCache[prevCachePnt - 2];
    console.log(prevCache);
    console.log("endidx: " + endidx);
    console.log("startidx: " + startidx);
    console.log("prevCachePnt" + (prevCachePnt));
    prevCachePnt--;
    text1 = pageSet(startidx, endidx, readFile);
    cacheDiff = endidx - startidx;
    startidx = endidx;
    endidx = endidx + cacheDiff;
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
}


