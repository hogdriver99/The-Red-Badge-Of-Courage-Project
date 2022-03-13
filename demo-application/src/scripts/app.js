import $ from 'jquery';
import raw from 'raw.macro';
import AppDefPage from '../AppDefPage';
import ReactDOM from 'react-dom';
import React from 'react';
import App from '../App';
import AppQuizPage from '../AppQuizPage';

var DOMstrings = {
    pageNumber: '.page-number',
    pageLeft: '.page-left',
    pageRight: '.page-right'
};

var jsFileLocation;
var readFile;
var RespType;
var FileType;
var chapterKeys = [];
var pageTrack;
var pageTrack_deserialized;

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
    document.getElementById("nextChapter").addEventListener("click", nextChapter);
    document.getElementById("backChapter").addEventListener("click", backChapter);
    document.addEventListener("DOMContentLoaded", runPageGet);
    document.getElementById('currpage').addEventListener('blur', function() {
        var currpg = document.getElementById('currpage').textContent
        console.log(currpg);
        try {
            currpg = parseInt(currpg, 10);
            document.cookie = 'pagenum=' + currpg;
            let pageTrack = JSON.stringify(document.cookie);
            localStorage.setItem("Key", pageTrack);
            pageReturn();
        } catch (error) {
            console.log(error);
            currpg = document.cookie;
            currpg = currpg.split("=");
            currpg = parseInt(currpg[1], 10);
            console.log(currpg);
            var newpg = currpg + 1;
            document.querySelector(DOMstrings.pageNumber).textContent = currpg + "-" + newpg;
            //TODO: Raise dialog box explaining issue
        }
    }, false);

    pageTrack_deserialized = JSON.parse(localStorage.getItem("Key"));
    document.cookie = pageTrack_deserialized;

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
            if (readFile[index] == "Chapter") {
                chapterKeys.push(index);
            }
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
        for (let index = 0; index < chapterKeys.length; index++) {
            chapterKeys[index] -= firstbreak;
        }
        console.log("File Read.  First word: " + readFile[0]);
        runPageGet();
        pageReturn();
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

var text1 = '';
var text2 = '';
var startidx;
var endidx;
var stdDiff = 350;
// var prevCachePnt = 0;
// var cacheDiff;
// var prevCache = []
function runPageGet(){
    startidx = 0;
    endidx = 350;
    text1 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageNumber).textContent = "1-2"
    startidx = endidx;
    endidx = endidx + stdDiff;
    // console.log("startidx: " + startidx);
    // console.log("endidx: " + endidx);


    text2 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageRight).textContent = text2;
}


function pageSet(startidx, endidx, source) {
    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    var outtext = '';
    for (let index = startidx; index < endidx; index++){
        if (index >= source.length) {
            return outtext;
        }
        outtext = outtext + " " + source[index];
    }
    return outtext;
}

//highlights words on one click
$(window).on("load", function() {

    var point = $('p');
    point.css({ cursor: 'pointer' });

    point.click(function(e) {

        //finds range of selected word
        var selection = window.getSelection() || document.getSelection()
        || document.selection.createRange();
        var range = selection.getRangeAt(0);
        var node = selection.anchorNode;

        //sets start offset of word and catches in there is a -- before the selected character
        while(range.toString().indexOf(' ') != 0) {
            if(range.toString().charAt(1) != 0) {
                if(/^[-]*$/.test(range.toString().charAt(0)) &&
                    /^[-]*$/.test(range.toString().charAt(1))) {
                    break;
                }
            }
            range.setStart(node, (range.startOffset - 1));
        }
        range.setStart(node, range.startOffset + 1);

        //sets end offset and catches if there is a -- after the selected letter
        const countUp = 0;
        while(range.toString().indexOf(' ') == -1 && range.toString().trim() != '' &&
            range.endOffset + 1 < selection.baseNode.wholeText.length) {
            if(range.toString().charAt(range.toString().length - 2 != 0)) {
                if(/^[-]*$/.test(range.toString().charAt(range.toString().length - 1)) &&
                    /^[-]*$/.test(range.toString().charAt(range.toString().length - 2))) {
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

        var text = $.trim(selection.toString());
        selection.collapse();
    });

    point.dblclick(function(f) {
        console.log("Trying to pull def page");
        pullDefPage();
    });

});

function pullDefPage() {
    window.defPage = true;
    console.log(AppDefPage);
    ReactDOM.render(
        <React.StrictMode>
          {(!window.defPage) ? <App /> : <AppDefPage />}
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//
function pullQuizPage() {
    window.defPage = false;
    console.log("Trying to pull Quiz Page")
    ReactDOM.render(
        <React.StrictMode>
            <AppQuizPage />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//
export function btnHandler(btnVal) {
    console.log(btnVal);
    if (btnVal == "Quiz") {
        pullQuizPage();
    } else if (btnVal == "Return to book") {
        backToBook();
        window.location.reload();
    } else if (btnVal == 'wordA' || btnVal == 'wordB' || btnVal =='wordC' || btnVal == 'wordD') {
        backToBook();
        window.location.reload();
    }
}

async function backToBook() {
    window.defPage = false;
    await ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
    pageReturn();
}

//
function pageReturn() {
    pageTrack_deserialized = JSON.parse(localStorage.getItem("Key"));
    var currpg = pageTrack_deserialized;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    startidx = (currpg - 1) * stdDiff;
    endidx = startidx + stdDiff;
    text1 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageNumber).textContent = currpg + "-" + (currpg + 1);

    startidx = endidx;
    endidx = endidx + stdDiff;
    text2 = pageSet(startidx, endidx, readFile);
    document.querySelector(DOMstrings.pageRight).textContent = text2;
    document.getElementById("nextpage").addEventListener("click", nextPage);
    document.getElementById("backpage").addEventListener("click", backPage);
    document.getElementById("nextChapter").addEventListener("click", nextChapter);
    document.getElementById("backChapter").addEventListener("click", backChapter);
    document.getElementById('currpage').addEventListener('blur', function() {
        var currpg = document.getElementById('currpage').textContent
        try {
            currpg = parseInt(currpg, 10);
            document.cookie = 'pagenum=' + currpg;
            let pageTrack = JSON.stringify(document.cookie);
            localStorage.setItem("Key", pageTrack);
            pageReturn();
        } catch (error) {
            currpg = document.cookie;
            currpg = currpg.split("=");
            currpg = parseInt(currpg[1], 10);
            console.log(currpg);
            var newpg = currpg + 1;
            document.querySelector(DOMstrings.pageNumber).textContent = currpg + "-" + newpg;
            //TODO: Raise dialog box explaining issue
        }
    }, false);
}

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
    text1 = '';
    text2 = '';
    //startidx = endidx;
    //endidx = endidx + cacheDiff;
    text1 = pageSet(startidx, endidx, readFile);
    if (text1.length < stdDiff) {
        return;
    }
    var newpg = currpg + 1;
    document.cookie = "pagenum=" + newpg;
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    document.querySelector(DOMstrings.pageNumber).textContent = newpg + "-" + (newpg + 1);

    startidx = endidx;
    endidx = endidx + stdDiff;
    text2 = pageSet(startidx, endidx, readFile);
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
    document.querySelector(DOMstrings.pageRight).textContent = document.querySelector(DOMstrings.pageLeft).textContent;
    document.querySelector(DOMstrings.pageNumber).textContent = newpg + "-" + (newpg + 1)
    endidx = startidx - stdDiff;
    startidx = endidx - stdDiff;

    text1 = pageSet(startidx, endidx, readFile);

    startidx = endidx;
    endidx = endidx + stdDiff;
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
}

function nextChapter() {
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    startidx = (currpg - 1) * stdDiff;
    endidx = startidx + stdDiff;
    var target;
    for (let index = 0; index < chapterKeys.length; index++) {
        if (chapterKeys[index] >= endidx) {
            target = index;
            break;
        }
    }
    if (target == null) {
        //TODO: raise error
        return;
    }
    var newpg = Math.floor(chapterKeys[target] / stdDiff) + 1;
    document.cookie = "pagenum=" + newpg;
    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    pageReturn();
}

function backChapter() {
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    startidx = (currpg - 1) * stdDiff;
    var target;
    for (let index = 0; index < chapterKeys.length; index++) {
        if (chapterKeys[index] >= startidx) {
            target = index - 1;
            break;
        }
    }
    if (target == null || target < 0) {
        //TODO: raise error
        return;
    }
    var newpg = Math.floor(chapterKeys[target] / stdDiff) + 1;
    document.cookie = "pagenum=" + newpg;
    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    pageReturn();
}
