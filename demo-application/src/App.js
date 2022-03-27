import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import IntroPage from './components/IntroPage';
import ImgPage from './components/ImgPage';
import Menu from './components/Menu';
import { useEffect, useState } from 'react'
import Button from './components/Button';

function App() {
  //intro page state variable
  const [introPage, setIntroPage] = useState(false);
  const introPageOnClick = () => {
    setIntroPage(!introPage)
    setImgPage(false)
  }

  // images page state variable
  const [imgPage, setImgPage] = useState(false);
  const imgPageOnClick = () => {
    setImgPage(!imgPage)
    console.log(imgPage)
  }
  
  return (
    <div className="app" id="app">
      <Menu introPageOnClick={introPageOnClick}/>
      {/* Showing intro/Images pages*/}
      {introPage && <IntroPage />}
      {imgPage && <ImgPage />}

      <Book />
      <ControlPanel />

      {/* Bottom menu buttons for Intro/Images pages */}
      {introPage && <div className="hideControl" id="introBtn">
        {/* Left button */}
        {!imgPage && <Button text='More Pictures' onClick={() => imgPageOnClick()}/>}
        {imgPage && <Button text='Back to Intro' onClick={() => imgPageOnClick()}/>}

        {/* Right Button */}
        <Button text='Proceed to the Book' onClick={() => introPageOnClick()}/>
      </div> }
      
    </div>
  );
}


export default App;
