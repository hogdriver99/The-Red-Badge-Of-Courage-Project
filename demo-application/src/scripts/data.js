class Data {
    constructor() {
        this.wordsCompleted = []
    }

    pushWord(word) {
        this.wordsCompleted.push(word)
    }

    getWordsCompleted() {
        return this.wordsCompleted
    }
}

let data = new Data();

function pushData(word) {
    data.pushWord(word)
}

function construct() {
    data = new Data()
}

function getObj() {
    return 
}