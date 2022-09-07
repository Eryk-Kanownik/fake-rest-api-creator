import Form from './Components/Form';
import {useState} from 'react'
import Navbar from './Components/Navbar';
import RetrievedData from './Components/RetrievedData';
import './style.css'

function App() {
  const [click,setClick] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Form loadOnSubmit={setClick} value={click}/>
      <RetrievedData loadData={click}/>
    </div>
  );
}

export default App;
