import logo from './logo.svg';
import './Components/Header'
import { Header } from './Components/Header';
import "./scss/main.scss";
import './scss/app_dark-theme.scss';
import './scss/app_light-theme.scss';
import { useState } from 'react';
import { TodoComponent} from './Components/TodoComponent';

function App() {
  let themeLocal = JSON.parse(window.localStorage.getItem('theme'));
  if(!themeLocal) themeLocal = 'light';
  const [theme, setTheme] = useState(themeLocal);
  const getTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
      window.localStorage.setItem('theme', JSON.stringify('dark'));
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', JSON.stringify('light'));
            };
  }
  
  return (
    <div className={`App app_${theme}`}>
    <Header getTheme={getTheme}></Header>
    <TodoComponent ></TodoComponent>
    </div>
  );
}

export default App;
