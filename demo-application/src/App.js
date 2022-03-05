import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app" id="app">
      <Menu />
      {/* <MenuMobile /> */}
      <Book />
      <ControlPanel />
      {/* <BookWithControl /> */}
    </div>
  );
}


export default App;
