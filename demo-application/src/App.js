import './App.css';
import Book from './components/Book';
import BookWithControl from './components/BookWithControl';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';
import MenuMobile from './components/MenuMobile';
import NavSideBar from './components/NavSideBar';

function App() {
  return (
    <div className="app" id="app">
      <Menu />
      <MenuMobile />
      <Book />
      <ControlPanel />
      {/* <BookWithControl /> */}
    </div>
  );
}


export default App;
