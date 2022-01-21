import './App.css';
import Book from './components/Book';
import BookContainer from './components/BookContainer';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu'

function App() {
  return (
    <div className="app">
      <Menu />
      <BookContainer />
      <ControlPanel />
    </div>
  );
}


export default App;
