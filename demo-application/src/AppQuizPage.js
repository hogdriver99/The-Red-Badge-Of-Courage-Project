import './App.css';
import QuizPage from './components/QuizPage';
import ControlPanel from './components/ControlPanel';
import Menu from './components/Menu';

function AppQuizPage({text}) {
    return (
    <div className="app" id="app">
      <Menu />
      <QuizPage text={text}/>
      <ControlPanel />
    </div>
  );
}


export default AppQuizPage;