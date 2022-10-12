import React from 'react';
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getApi } from './redux/actions';
import Users from './components/Users';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi());
  }, []);

  
  return (
    <div className="App">
      <h1>Fetching Api Data using Redux</h1>
      <Users/>
    </div>
  );
}

export default App;
