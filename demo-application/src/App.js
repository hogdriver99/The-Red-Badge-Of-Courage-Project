import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';
import MenuMobile from './components/MenuMobile';

function App() {
  return (
    <div className="app" id="app">
      <Menu />
      <MenuMobile />
      <Book />
      <ControlPanel />
    </div>
  );
}


export default App;
