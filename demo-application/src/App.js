import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import IntroPage from './components/IntroPage';
import Menu from './components/Menu';
import { useEffect, useState } from 'react'
import Button from './components/Button';

function App() {
  //state variable to know we're in intro page or not
  const [introPage, setIntroPage] = useState(false);
  const introPageOnClick = () => {
    setIntroPage(!introPage)
    console.log(introPage)
  }

  return (
    <div className="app" id="app">
      <Menu introPageOnClick={introPageOnClick}/>
      {introPage && <IntroPage />}
      <Book />
      <ControlPanel />

      {introPage && <div className="hideControl" id="introBtn">
        <Button text='More Pictures' onClick={() => introPageOnClick()}/>
        <Button text='Proceed to the Book' onClick={() => introPageOnClick()}/>
      </div> }
      
    </div>
  );
}


export default App;
