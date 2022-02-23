import './App.css';
import DefPage from './components/DefPage';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';
import './index.css';

function AppDefPage() {
  console.log(DefPage);
    return (
    <div className="app" id="app">
      <Menu />
      <DefPage />
      <ControlPanel />
    </div>
  );
}


export default AppDefPage;