import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import IntroPage from './components/IntroPage';
import ImgPage from './components/ImgPage';
import Menu from './components/Menu';
import { useEffect, useState } from 'react'
import Button from './components/Button';

function App() {
  // reinitialize data (uncomment 2 lines below to start over storing data)
  // localStorage.setItem("data", [])
  // localStorage.setItem("dataCount", 0)

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
  
  // data state variable for the future
  //  const [data, setData] = useState([]);
  //  const addDataOnClick = (newData) => {
  //    let updateData = data
  //    updateData.push(newData)
  //    setData(updateData)
  //    console.log("Data Updated")
  //  }

  return (
    <div className="app" id="app">
      <Menu introPageOnClick={introPageOnClick}/>
      {/* Showing Intro/Images pages*/}
      {introPage && <IntroPage />}
      {imgPage && <ImgPage />}

      <Book />
      <ControlPanel />

      {/* Bottom menu buttons for Intro/Images pages */}
      {introPage && <div className="hideControl" id="introBtn">
        {/* Left button */}
        {!imgPage && <Button id="longBtn" text='More Pictures' onClick={() => imgPageOnClick()}/>}
        {imgPage && <Button id="longBtn" text='Back to Intro' onClick={() => imgPageOnClick()}/>}

        {/* Right Button */}
        <Button id="longBtn" text='Read Book' onClick={() => introPageOnClick()}/>
      </div> }
      
    </div>
  ); 
}


export default App;
