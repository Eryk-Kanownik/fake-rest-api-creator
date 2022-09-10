import Form from './Components/Form';
import {useState, useEffect} from 'react'
import Navbar from './Components/Navbar';
import CurrentCollection from './Components/CurrentCollection'
import './style.css'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <CurrentCollection />
      <Form />
    </div>
  );
}

export default App;
