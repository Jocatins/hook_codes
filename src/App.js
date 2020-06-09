import React from 'react';
import './App.css'
import HookTimer from './components/HookTimer';
import ClassTimer from './components/ClassTimer';





function App() {
  return (
    <div className="App">   
    <h1>Jocatins</h1>
    <ClassTimer/>
    <HookTimer/>
    </div>
  );
}

export default App;
