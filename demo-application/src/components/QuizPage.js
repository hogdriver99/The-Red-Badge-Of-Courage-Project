import React from 'react';
import Button from './Button'
import Icon from './Icon'
import { btnHandler, getBtnVals, endQuiz} from '../scripts/app';
import { useEffect, useState } from 'react'
import goldStar from '../images/Gold-Star-Blank.png'
import silverStar from '../images/Silver-Star-Blank.png'

const QuizPage = ({text}) => {
  let word = getBtnVals(text)
  let tempText = "This word is not defined"
  let displayText = word.pop()
  if (displayText) {
    tempText = displayText
  }

  // state vars to keep stack of stars
  const [stars, setStars] = useState(0);
  const [starsArray, setStarsArray] = useState([false,false,false,false,false]);
  const [silverStars, setSilverStars] = useState(0);
  const [silverStarsArray, setSilverStarsArray] = useState([false,false,false,false,false]);
  var won = false

  let exitQuiz = () => {
    console.log("End")

    var totalStars = stars
    if (won) {
      totalStars += 1
    }

    // append new quiz data
    var tempData = localStorage.getItem("data")
    tempData += text
    tempData += ": "
    tempData += silverStars
    tempData += "/5 silver; "
    tempData += totalStars
    tempData += "/5 gold;\n"
    localStorage.setItem("data", tempData)

    // update data count
    var tempDataCount = localStorage.getItem("dataCount")
    if (!tempDataCount) {
      tempDataCount = 0
    } else {
      tempDataCount = parseInt(tempDataCount)
      tempDataCount++
    }
    localStorage.setItem("dataCount", tempDataCount)
    
    // exit
    endQuiz()
    btnHandler("wordA")
  }

  const updateStarsOnClick = (answer) => {
    
    // correct
    if (answer) {
      let newArray = starsArray
      newArray[stars] = true
      setStarsArray(newArray)

      setStars(stars+1)
      
      //terminate after 5 stars
      if (stars >= 4) {
        won = true
        exitQuiz()
      }
    } else {
      // Always store highest silver score
      if (stars > silverStars) {
        setSilverStarsArray(starsArray)
        setSilverStars(stars)
        console.log(silverStarsArray)
      }
      setStarsArray([false,false,false,false,false])
      setStars(0)
    }

  }

  let onClickFunc = (word) => {
    let checkAnswer = btnHandler(document.getElementById(word).id)
    updateStarsOnClick(checkAnswer)
  }

  return (
    <div className='bookContainer'>
        <div className='book' style={bookStyle}>
          <div className='defPage'>
            <div className='definitionWordQ'>
              {/* Displaying stars */}
              <center>
              <div className='stars'>
                {silverStarsArray[0] && <Icon image={silverStar} name='silverStar'/>}
                {silverStarsArray[1] && <Icon image={silverStar} name='silverStar'/>}
                {silverStarsArray[2] && <Icon image={silverStar} name='silverStar'/>}
                {silverStarsArray[3] && <Icon image={silverStar} name='silverStar'/>}
                {silverStarsArray[4] && <Icon image={silverStar} name='silverStar'/>}
              </div>
              <div className='stars'>
                {starsArray[0] && <Icon image={goldStar} name='goldStar'/>}
                {starsArray[1] && <Icon image={goldStar} name='goldStar'/>}
                {starsArray[2] && <Icon image={goldStar} name='goldStar'/>}
                {starsArray[3] && <Icon image={goldStar} name='goldStar'/>}
                {starsArray[4] && <Icon image={goldStar} name='goldStar'/>}
              </div>
              </center>
              
              <center>
                  <h1 id="defLabel"> Definition: </h1>
                  <div  className="defLabelText">

                    <h3>{tempText}</h3>
                  </div>
              </center>
            </div>
            <div className = "optionButtons">
                <div className='quizButton1'>
                    <button onClick={function (e) {onClickFunc('wordA')}} className='button' id='wordA'>{word[0]}</button>
                </div>
                <div className='quizButton2'>
                    <button onClick={function (e) {onClickFunc('wordB')}} className='button' id='wordB'>{word[1]}</button>
                </div>
                <div className='quizButton3'>
                    <button onClick={function (e) {onClickFunc('wordC')}} className='button' id='wordC'>{word[2]}</button>
                </div>
                <div className='quizButton4'>
                    <button onClick={function (e) {onClickFunc('wordD')}} className='button' id='wordD'>{word[3]}</button>
                </div>
            </div>

            <div>
              <Button text="Exit" onClick={function (e) {exitQuiz()}}/>
            </div>
          </div>
        </div>
    </div>
  )
};

const bookStyle = {
  backgroundColor: 'white',
}


export default QuizPage;