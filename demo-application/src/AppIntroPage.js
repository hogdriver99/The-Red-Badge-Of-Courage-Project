import './App.css';
import IntroPage from './components/IntroPage';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';
import './index.css';

function AppIntroPage() {
  console.log(IntroPage);
    return (
    <div className="app" id="app">
      <Menu />
      <IntroPage />
      <ControlPanel />
    </div>
  );
}


export default AppIntroPage;