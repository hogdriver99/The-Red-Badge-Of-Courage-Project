import React from 'react';
import Button from './Button'
import { btnHandler } from '../scripts/app';

const QuizPage = () => {

  let tempText = "XXXXXXXXXXXXYYYYYYYYYYYYYZZZZZZZZZZZZZZZZ"

  return (
    <div className='bookContainer'>
        <div className='book' style={bookStyle}>
          <div className='defPage'>
            <div className='definitionWord'>
              <center>
              <h1> Definition: </h1>
              <p>{tempText}</p>
              </center> 
            </div>
            <div className = "optionButtons">
              <center>
                  <div className='quizButton1'>
                      <button onClick={function (e) {btnHandler(document.getElementById('wordA').id)}} className='button' id='wordA'>Word A</button>
                  </div>
              </center>
              <center>
                  <div className='quizButton2'>
                      <button onClick={function (e) {btnHandler(document.getElementById('wordB').id)}} className='button' id='wordB'>Word B</button>
                  </div>
              </center>

              <center>
                  <div className='quizButton3'>
                      <button onClick={function (e) {btnHandler(document.getElementById('wordC').id)}} className='button' id='wordC'>Word C</button>
                  </div>
              </center>

              <center>
                  <div className='quizButton4'>
                      <button onClick={function (e) {btnHandler(document.getElementById('wordD').id)}} className='button' id='wordD'>Word D</button>
                  </div>
              </center>
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