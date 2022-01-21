import './App.css';
import Book from './components/Book';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu'

function App() {
  return (
    <div className="app">
      <Menu />
      <Book />
      <ControlPanel />
    </div>
  );
}


export default App;
