import $ from 'jquery';
import raw from 'raw.macro';
import AppDefPage from '../AppDefPage';
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import App from '../App';
import AppQuizPage from '../AppQuizPage';
import defenitions from './worddefs.json';
import popup from '../PopUp.css';

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
    //On launch, we stall loading the page until the JQuery is loaded
    awaitJQuery(loadApp);
}

function awaitJQuery(callback) {
    var waitForLoad = function () {
        if (typeof jQuery != "undefined") {
            //executes passed in function
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

    /**The following are event listeners that handle page navigation
     * These are necessary to include in any function that refreshes the page
     * Otherwise the page navigation functionality will break
     */
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
            var cookiePg = document.cookie;
            console.log(cookiePg);
            cookiePg = cookiePg.split("=");
            cookiePg = parseInt(cookiePg[1], 10);
            console.log(cookiePg);
            if (currpg <= 0) {
                document.querySelector(DOMstrings.pageNumber).textContent = cookiePg + "-" + (cookiePg + 1);
                return;
            }
            document.cookie = 'pagenum=' + currpg;
            let pageTrack = JSON.stringify(document.cookie);
            localStorage.setItem("Key", pageTrack);

            pageReturn(cookiePg);
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
    //make importFile wait until JQuery is loaded
    importFileStage(importFile);
}

//This function is somewhat redundant since it just passes the importFile method to awaitJQuery
function importFileStage(callback) {
    console.log("importing file...")
    awaitJQuery(callback);
}

/**
 * This file has the current way of reading the file using raw.macro
 * @param {*} X file that is read by importFile
 * @param {*} fileloc location of the file read (likely deprecated with current functionality)
 */
function handleFile(X, fileloc){
    //var blobUri = URL.createObjectURL(new Blob([X], {type: "text/plain"}));
    const fileReader = new FileReader();
    fileReader.readAsText(new Blob([X], {type: "text/plain"}));
    fileReader.onload = function(e) {
        var rawText = raw('../scripts/73.txt');
        //detach newline characters from words
        rawText = rawText.replaceAll("\r\n\r\n", "&tempHold");
        //detach register return from words
        rawText = rawText.replaceAll("\r\n", " ");
        rawText = rawText.replaceAll("&tempHold"," \n\n\t ")
        //create array of text using space as the delimiting token
        readFile = rawText.split(" ");
        //break points will be used to condense file to specifically the book content
        var firstbreak = 0;
        var secondbreak = 0;
        for (let index = 0; index < readFile.length; index++) {
            //finds chapter indices for chapter navigation
            if (readFile[index] == "Chapter") {
                chapterKeys.push(index);
            }
            //finds start of book
            if (readFile[index] + " " + readFile[index+1] == "Chapter 1"){
                firstbreak = index;
            }
            //finds end of book
            if (readFile[index] + " " + readFile[index+1] == "THE END."){
                secondbreak = index + 2;
            }
        }
        // console.log(firstbreak);
        // console.log(secondbreak);
        //take only the part of the array that contains the book
        readFile = readFile.slice(firstbreak, secondbreak);
        //update chapter indices so they are accurate after the previous operation
        for (let index = 0; index < chapterKeys.length; index++) {
            chapterKeys[index] -= firstbreak;
        }
        console.log("File Read.  First word: " + readFile[0]);
        //loads pages
        runPageGet();
        pageReturn();
    };
}

/**
 * This function handles the file import functionality
 * This uses AJAXFileReadder and will pass the read file to the handleFile method
 * This is likely deprecated with current functionality in the handleFile method
 * It is currently important that the AJAXFileReadder loads as that is how handleFile is called
 * but this can be reworked at a future date to avoid AJAX
 */
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
/**
 * Runs the initial page set up loading pages 1 and 2
 */
function runPageGet(){
    startidx = 0;
    endidx = 350;
    //sets the text for the first page
    text1 = pageSet(startidx, endidx, readFile);
    //loads the text for page 1 onto the page
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
    //sets the page numbers at bottom of the page
    document.querySelector(DOMstrings.pageNumber).textContent = "1-2"

    //updates the indices for page 2
    startidx = endidx;
    endidx = endidx + stdDiff;

    //sets the text for the second page
    text2 = pageSet(startidx, endidx, readFile);

    console.log(text1);
    console.log(text2);
    //loads the text for page 2 onto the page
    document.querySelector(DOMstrings.pageRight).textContent = text2;
}

/**
 * Takes the specified indices and creates a string of the words between them
 * @param {int} startidx start index for the page
 * @param {int} endidx end index for the page
 * @param {array} source array for the book
 * @returns text value for the page as a single string
 */
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


let audio = '';

//plays audio file of highlighted word
async function audioFile(word) {
    //pulls url for audio file
    let sec = "audio";
    let fold = "words";
    let wrd = word;
    let prefix = word.substring(0,1);
    let url = "https://brainy-literacy-assets.s3.amazonaws.com/" + sec + "/" + fold + "/" + prefix + "/" + word + ".mp3";

    //Needs to check for '' for first audio call or for unaccessed audio
    //All proceeding calls need to wait for the audio to end
    if(audio === '' || audio.ended) {
        //declares and builds audio file
        audio = new Audio(url);

        //plays the audio file
        //If it doesn't exist, it changes the audio var to '' to allow future calls
        audio.play().catch(function() {
            $("span.popup-tag").css("display","flex");
            $("span.popup-tag").text("Sorry, this word doesn't have audio");
            audio = '';
        });
    }


}

// VARIABLE TO PASS IN CURRENT WORD TO DEF AND QUIZ SCREENS
let dbltext = ''

//highlights words on one click
$(window).on("load", function() {

    //makes cursor look clickable
    var point = $('p');
    point.css({ cursor: 'pointer' });


    point.click(function(e) {

        //finds range of selected word
        var selection = window.getSelection() || document.getSelection()
        || document.selection.createRange();
        var range = selection.getRangeAt(0);
        var node = selection.anchorNode;

        //sets start offset of word and catches if there is a -- before the selected character
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

        //final text to be highlighted
        var text = $.trim(selection.toString());

        //matches highlighted word to definition list
        dbltext = text.replace(/[']/g, "");
        dbltext.replace(/\s+/g," ")
        dbltext = dbltext.toLowerCase();

        audioFile(dbltext);

        //unhighlights the word after 2.5 seconds
        window.setTimeout(() => {
            window.getSelection().empty();
            $("span.popup-tag").css("display","none");
        }, 3500);
    });

    point.dblclick(function(f) {
        pullDefPage(dbltext);
    });

});

/**
 * Reloads the app using the Definition Page
 */
function pullDefPage(word) {
    window.defPage = true;
    // console.log(AppDefPage);
    //forces a rerender. NOTE: Event Listeners must be reloaded on return
    ReactDOM.render(
        <React.StrictMode>
          {(!window.defPage) ? <App /> : <AppDefPage />}
        </React.StrictMode>,
        document.getElementById('root')
    );

    defPageReturn(word);
}

//finds definition of selected word
function findDef(word) {

    //pulls definition list
    const jsonData = require('../scripts/worddefs.json');

    var result = jsonData;

    var words = [];
    var def;

    //sets up array of array of words with definition
    words = Object.entries(result);

    //finds the word in the definition list and pulls out its definition
    //if not found, "not defined" is printed
    var def = words.find(key => key[0] == word);
    if (def != null) {
        def = def[1];
        return def;
    } else {
        return "not defined"
    }
}

//finds list of derivative words
function findAltWrd(word) {
    //pulls derivative word list
    const jsonData = require('../scripts/wordders.json');
    var result = jsonData;

    var words = [];
    var alt;

    //sets up array of array of words and derivatives
    words = Object.entries(result);

    //finds the word in the list and pulls out its derivatives
    alt = words.find(key => key[0] == word);
    if (alt != null) {
        alt = alt[1];
        return alt;
    } else {
        return [word];
    }
}

//sets up definition page content
function defPageReturn(word) {
    var alt = []
    alt = findAltWrd(word);

    //pulls out root word from derivative word
    var root = alt[0];
    alt.splice(0, 1);
    let deriv = "";

    //sets up words into a list with commas
    alt.forEach((variation) => {
        deriv = deriv + variation + ", ";
    })
    deriv = deriv.substring(0, deriv.length - 2);
    if(deriv === "") {
        deriv = "";
    }

    //sets definition string and derivative string
    var def = '<br>' + '<br>' + '<br>' + findDef(word) + '<br>' + '<br>' +  deriv;

    //sets title content on definition screen
    let title = document.querySelector("h2");
    title.innerHTML =  root + "";
    title.style.fontSize = "45px";

    //sets definition content on definition screen
    let definition = document.querySelector("h3");
    definition.style.fontSize = "24px";
    definition.innerHTML =  def;
}


/**
 * Reloads the app using the Quiz Page
 */
function pullQuizPage(text) {
    window.defPage = false;
    //console.log("Trying to pull Quiz Page")
    //forces a rerender. NOTE: Event Listeners must be reloaded on return
    ReactDOM.render(
        <React.StrictMode>
            <AppQuizPage text={text}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// QUIZ
let correctChoice = 0;

export function getBtnVals() {
    // Get data from json file (def, correct word, dummy words)
    let defenition = defenitions[dbltext]

    // Getting random words
    let dummyWords = ["Dummy1", "Dummy2", "Dummy3"]
    let keys = Object.keys(defenitions)
    for (var i = 0; i < 3; i++) {
        let randChoice = Math.floor(Math.random() * keys.length)
        dummyWords[i] = keys[randChoice]

        // case random choice happens to be word to be guessed
        if (keys[randChoice] === dbltext) {
            i--
        }
    }

    // Assign correct choice
    let word = []
    correctChoice = Math.floor(Math.random()*4)
    word[correctChoice] = dbltext

    // Assign dummy words
    for (let i = 0; i < 4; i++) {
        if (i != correctChoice) {
            word[i] = dummyWords.pop()
        }
    }
    word.push(defenition)
    return word
}

let checkAnswer = (choice) => {
    let answer = false

    switch(correctChoice) {
        case 0:
            if (choice == 'wordA') {
                answer = true
            }
            break;
        case 1:
            if (choice == 'wordB') {
                answer = true
            }
            break;
        case 2:
            if (choice == 'wordC') {
                answer = true
            }
            break;
        case 3:
            if (choice == 'wordD') {
                answer = true
            }
            break;
    }

    return answer
}

let quizIsOn = true

// function to stop the quiz!
export function endQuiz() {
    console.log("Quiz Ended")
    quizIsOn = false
}

// button handler needed for other pages, called from HTML
export function btnHandler(btnVal) {
    console.log(btnVal);
    if (btnVal == "Quiz") {
        // check if defenition exists, if not - no quiz
        let defExits = defenitions[dbltext]

        if (!defExits) {
            backToBook()
            window.location.reload();
        } else {
            pullQuizPage(dbltext);
        }
        
    } else if (btnVal == "Return to book") {
        backToBook();
        window.location.reload();
    } else if (btnVal == 'wordA' || btnVal == 'wordB' || btnVal =='wordC' || btnVal == 'wordD') {

        if (quizIsOn) {
            console.log(checkAnswer(btnVal))
            return checkAnswer(btnVal)
        } else {
            backToBook();
        }
        window.location.reload();
    }
}

/**
 * Reloads the app using the Book Page. Occurs asynchronously
 */
async function backToBook() {
    window.defPage = false;
    //forces rerender.  NOTE: Event Listeners must be reloaded
    await ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
    //resets to last page
    pageReturn();
}

/**
 * Returns to book page from elsewhere
 * @param {int} prevPg optional value for a specific page to return to
 * @returns No return, return used to force exit early from method
 */
function pageReturn(prevPg = null) {
    console.log("entered pageReturn");
    pageTrack_deserialized = JSON.parse(localStorage.getItem("Key"));
    var currpg = pageTrack_deserialized;
    console.log(currpg);
    if (currpg == "null"){
        console.log("in if");
        currpg = "pagenum=1";
        document.cookie = "pagenum=1";
    }
    console.log(currpg);
    currpg = currpg.split("=");
    if (currpg[1] == NaN || currpg[1] == "NaN"){
        currpg[1] = "1";
        document.cookie = "pagenum=1";
    }
    console.log(currpg);
    currpg = parseInt(currpg[1], 10);

    startidx = (currpg - 1) * stdDiff;
    if (startidx > readFile.length) {
        //if prevPg specified, load prevPg
        if (prevPg) {
            currpg = prevPg;
            document.querySelector(DOMstrings.pageNumber).textContent = currpg + "-" + (currpg + 1);
            document.cookie = "pagenum=" + currpg;
        }
        return;
    }
    endidx = startidx + stdDiff;
    //set text for left page
    text1 = pageSet(startidx, endidx, readFile);
    //load text onto page
    document.querySelector(DOMstrings.pageLeft).textContent = text1;

    //if page was last page, stop
    if (text1.length < stdDiff) {
        return;
    }
    document.querySelector(DOMstrings.pageNumber).textContent = currpg + "-" + (currpg + 1);

    //update indices
    startidx = endidx;
    endidx = endidx + stdDiff;
    //set text for right page
    text2 = pageSet(startidx, endidx, readFile);
    //load text onto page
    document.querySelector(DOMstrings.pageRight).textContent = text2;

    //Reloads all Event Listeners. VERY IMPORTANT
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

/**
 * Loads next page
 * @returns no return, return is used to exit early
 */
function nextPage(){
    //grabs page stored in document cookie
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    text1 = '';
    text2 = '';
    //set text 1
    text1 = pageSet(startidx, endidx, readFile);
    //load text 1 onto page
    document.querySelector(DOMstrings.pageLeft).textContent = text1;

    //check if page is last page
    if (text1.length < stdDiff) {
        document.querySelector(DOMstrings.pageNumber).textContent = currpg + 1;
        return;
    }
    var newpg = currpg + 1;

    //set page number at bottom of page
    document.cookie = "pagenum=" + newpg;
    document.querySelector(DOMstrings.pageNumber).textContent = newpg + "-" + (newpg + 1);

    //update indices
    startidx = endidx;
    endidx = endidx + stdDiff;
    //set text 2
    text2 = pageSet(startidx, endidx, readFile);

    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    //load text 2 onto page
    document.querySelector(DOMstrings.pageRight).textContent = text2;
}

/**
 * Goes back a page
 * @returns no return, return is used to exit early
 */
function backPage(){
    //grabs current page from document cookie
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    var newpg = currpg - 1
    //check if out of bound
    if (newpg <= 0){
        return;
    }
    document.cookie = "pagenum=" + newpg;
    text1 = '';
    text2 = '';
    //move left page to right page
    document.querySelector(DOMstrings.pageRight).textContent = document.querySelector(DOMstrings.pageLeft).textContent;
    //set page numbers at bottom of the page
    document.querySelector(DOMstrings.pageNumber).textContent = newpg + "-" + (newpg + 1)
    //update indices
    endidx = startidx - stdDiff;
    startidx = endidx - stdDiff;

    //set text 1
    text1 = pageSet(startidx, endidx, readFile);

    //update indices
    startidx = endidx;
    endidx = endidx + stdDiff;

    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    //load text 1 onto page
    document.querySelector(DOMstrings.pageLeft).textContent = text1;
}

/**
 * Moves to the next chapter
 * @returns no return, return used to exit early
 */
function nextChapter() {
    //get current page from document cookie
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    startidx = (currpg - 1) * stdDiff;
    endidx = startidx + stdDiff;
    var target;
    //finds the index for the next chapter
    for (let index = 0; index < chapterKeys.length; index++) {
        if (chapterKeys[index] >= endidx) {
            target = index;
            break;
        }
    }
    //checks if we are in the last chapter
    if (target == null) {
        //TODO: raise error
        return;
    }
    //calculates new page
    var newpg = Math.floor(chapterKeys[target] / stdDiff) + 1;
    //set document cookie to new page
    document.cookie = "pagenum=" + newpg;

    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    //loads new page
    pageReturn();
}

/**
 * Moves to the previous chapter
 * @returns no return, return used to exit early
 */
function backChapter() {
    //gets current page from document cookie
    var currpg = document.cookie;
    currpg = currpg.split("=");
    currpg = parseInt(currpg[1], 10);
    startidx = (currpg - 1) * stdDiff;
    var target;
    //finds previous chapter index
    for (let index = 0; index < chapterKeys.length; index++) {
        if (chapterKeys[index] >= startidx) {
            target = index - 1;
            break;
        }
    }

    //checks if in the first chapter
    if (target == null || target < 0) {
        //TODO: raise error
        return;
    }
    //calculates new page index
    var newpg = Math.floor(chapterKeys[target] / stdDiff) + 1;
    //sets document cookie to new page
    document.cookie = "pagenum=" + newpg;

    let pageTrack = JSON.stringify(document.cookie);
    localStorage.setItem("Key", pageTrack);
    //loads new page
    pageReturn();
}



