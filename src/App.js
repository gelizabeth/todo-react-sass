import logo from './logo.svg';
import './Components/Header'
import { Header } from './Components/Header';
import "./scss/main.scss";
import './scss/app_dark-theme.scss';
import './scss/app_light-theme.scss';
import { useState } from 'react';
import { TodoComponent} from './Components/TodoComponent';

function App() {
  const [theme, setTheme] = useState('light');
  const getTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    } else setTheme('light');
  }
  
  return (
    <div className={`App app_${theme}`}>
    <Header getTheme={getTheme}></Header>
    <TodoComponent ></TodoComponent>
    </div>
  );
}

export default App;
