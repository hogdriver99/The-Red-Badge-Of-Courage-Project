import React from 'react';
import Button from './Button'
import { btnHandler } from '../scripts/app';

const DefPage = () => {
  return (
    <div className='bookContainer'>
        <div className='book' style={bookStyle}>
          <div className='defPage'>
            <div className='definitionWord'>
              <center>
                <h1>
                  Word Definition:
                </h1>
              </center> 
            </div>

            <div className='definition'>
              <center>
                <h3>
                  XXXXXXXXXXXXYYYYYYYYYYYYYZZZZZZZZZZZZZZZZ
                </h3>
              </center> 
            </div>
            
              <div className='quizButton'>
                  <button onClick={function (e) {btnHandler(document.getElementById('quizButton').textContent)}} className='button' id='quizButton'>Quiz</button>
              </div>
              <div className='returnToBook'>
                  <button onClick={function (e) {btnHandler(document.getElementById('returnToBook').textContent)}} className='button' id='returnToBook'>Return to book</button>
              </div>
          </div>
        </div>
    </div>
  )
};

const bookStyle = {
  backgroundColor: '#949292',
}

export default DefPage;