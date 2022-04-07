import './App.css';
import DefPage from './components/DefPage';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';
import './index.css';

function AppDefPage({text}) {
  console.log(DefPage);
    return (
    <div className="app" id="app">
      <Menu />
      <DefPage text={text}/>
      <ControlPanel />
    </div>
  );
}


export default AppDefPage;