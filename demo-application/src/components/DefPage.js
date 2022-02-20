import React from 'react';
import Button from './Button'
import { btnHandler } from '../scripts/app';

const DefPage = () => {
  return (
    <div className='bookContainer'>
        <div className='book'>
          <div className='definitionWord'>
            <center>
            <h1>
              Word Definition:
            </h1>
            </center> 
          </div>

          <div className='definiion'>
            <center>
            <h3>
              XXXXXXXXXXXXYYYYYYYYYYYYYZZZZZZZZZZZZZZZZ
            </h3>
            </center> 
          </div>
          
          <center>
            <div className='quizButton'>
                <button onClick={function (e) {btnHandler(document.getElementById('quizButton').textContent)}} className='button' id='quizButton'>Quiz</button>
            </div>
          </center>
          <center>
            <div className='Return to book'>
                <button onClick={function (e) {btnHandler(document.getElementById('returnToBook').textContent)}} className='button' id='returnToBook'>Return to book</button>
            </div>
          </center>
        </div>
    </div>
  )
};

export default DefPage;