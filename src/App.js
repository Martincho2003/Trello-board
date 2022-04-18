import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Board } from './Components/Board';
import { Login } from './Components/Login';
import { useState, useEffect } from 'react';
import { Boards } from './Components/Boards';
import { Home } from './Components/Home';

function App() {
  let applicationState = JSON.parse(localStorage.getItem('appState'))
  if (!applicationState) {
    applicationState = {
      boards: [],
      currentBoard: null,
      selectedCard: null
    }
  }
  const [appState, setAppState] = useState(applicationState);
  const navigate = useNavigate();
  const name = localStorage.getItem('username');
  
  useEffect(() => {
    if (!name) {
      navigate('/login');
    }
    localStorage.setItem('appState', JSON.stringify(appState)); 
  }, [appState]);

  return (

    <div className="app" >
      
      <Routes>
        <Route path='/dashboards' element={<Boards appState={appState} setAppState={setAppState} />} />
        <Route path='/dashboard' element={<Board appState={appState} setAppState={setAppState} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home appState={appState} setAppState={setAppState}/>} />
      </Routes>
      
    </div>

  );
}

export default App;
