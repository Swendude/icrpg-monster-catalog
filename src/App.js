import React from 'react';
import { Monsterblock } from './features/monsterblock/Monsterblock'
import { selectName } from './features/monsterblock/monsterSlice';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const name = useSelector(selectName);
  return (
    <div className="App">
        <Monsterblock></Monsterblock>
        <p>{name}</p>
    </div>
  );
}

export default App;
