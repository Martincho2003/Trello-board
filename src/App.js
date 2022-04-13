import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Board } from './Components/Board';
import { Login } from './Components/Login';
import './App.css';
import { useState, useEffect } from 'react';
import { Home } from './Components/Home';
import { Boards } from './Components/Boards';

function App() {
  let applicationState = JSON.parse(localStorage.getItem('appState'))
  if (!applicationState) {
    applicationState = {
      boards: [{
        name: "Selenium dashboard",
        columns: {
          name: "Todo",
          items: {

          }
        }
      }],
      currentBoard: null,
      selectedCard: null
    }
  }
  const [appState, setAppState] = useState(applicationState);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(appState)); 
  }, [appState]);

  const navigate = useNavigate();

  const name = localStorage.getItem('username');

  if (!name) {
    navigate('/login');
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboards' element={<Boards appState={appState} setAppState={setAppState} />} />
        {/* <Route path='/' element={<Board appState={appState} setAppState={setAppState} />} /> */}
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
