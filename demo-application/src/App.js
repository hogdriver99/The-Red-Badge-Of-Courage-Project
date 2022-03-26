import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import IntroPage from './components/IntroPage';
import ImgPage from './components/ImgPage';
import Menu from './components/Menu';
import { useEffect, useState } from 'react'
import Button from './components/Button';

function App() {
  //state variable to know we're in intro page or not
  const [introPage, setIntroPage] = useState(false);
  const introPageOnClick = () => {
    setIntroPage(!introPage)
    setImgPage(false)
  }

  const [imgPage, setImgPage] = useState(false);
  const imgPageOnClick = () => {
    setImgPage(!imgPage)
    console.log(imgPage)
  }
  
  return (
    <div className="app" id="app">
      <Menu introPageOnClick={introPageOnClick}/>
      {introPage && <IntroPage />}
      {imgPage && <ImgPage />}
      <Book />
      <ControlPanel />

      {introPage && <div className="hideControl" id="introBtn">
        {!imgPage && <Button text='More Pictures' onClick={() => imgPageOnClick()}/>}
        {imgPage && <Button text='Back to Intro' onClick={() => imgPageOnClick()}/>}
        <Button text='Proceed to the Book' onClick={() => introPageOnClick()}/>
      </div> }
      
    </div>
  );
}


export default App;
