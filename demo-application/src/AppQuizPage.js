import './App.css';
import QuizPage from './components/QuizPage';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';

function AppQuizPage() {
    return (
    <div className="app" id="app">
      <Menu />
      <QuizPage />
      <ControlPanel />
    </div>
  );
}


export default AppQuizPage;