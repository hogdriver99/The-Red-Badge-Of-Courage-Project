import React from 'react';
import Button from './Button'
import Icon from './Icon'
import { btnHandler, getBtnVals, endQuiz} from '../scripts/app';
import { useEffect, useState } from 'react'
import goldStar from '../images/Gold-Star-Blank.png'
import silverStar from '../images/Silver-Star-Blank.png'

const QuizPage = ({text}) => {

  let tempText = "hey this is a def just for teating purposes"

  let word = getBtnVals()
  // Needs to be for a specific word -> somehow find out what word it was
  // Stay here until 5 correct
  // change function to check for correct answer
  // display the stars and record correct or wrong answers

  // state var to keep stack of stars
  const [stars, setStars] = useState(0);
  // -1 - silver, 0 - non, 1 - golden
  const [starsArray, setStarsArray] = useState([false,false,false,false,false]);
  const [silverStars, setSilverStars] = useState(0);
  const [silverStarsArray, setSilverStarsArray] = useState([false,false,false,false,false]);

  const updateStarsOnClick = (answer) => {
    
    // correct
    if (answer) {
      //terminate after 5 stars
      //TO FIX currently needs another click to update
      if (stars >= 4) {
        console.log("End")
        endQuiz()
      }
      let newArray = starsArray
      newArray[stars] = true
      setStarsArray(newArray)

      setStars(stars+1)
      console.log(stars)
      
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
    console.log(checkAnswer)
    updateStarsOnClick(checkAnswer)
  }

  return (
    <div className='bookContainer'>
        <div className='book' style={bookStyle}>
          <div className='defPage'>
            <div className='definitionWord'>
              {/* Displaying stars */}
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
              <center>
                  <h1 id="defLabel"> Definition: </h1>
                  <div  className="defLabelText">

                    <p>{tempText}</p>
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
          </div>
        </div>
    </div>
  )
};

const bookStyle = {
  backgroundColor: '#949292',
}


export default QuizPage;