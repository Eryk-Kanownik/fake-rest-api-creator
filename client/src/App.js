import Form from './Components/Form';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from './Components/Navbar';
import RetrievedData from './Components/RetrievedData';
import './style.css'

function App() {
  const [click,setClick] = useState(0);
  const [data,setData] = useState([])
    useEffect(() => {
      async function fetchData(){
        let response = await axios.get('http://localhost:2000/get') 
        setData(response.data)
      }
      fetchData();
    },[click])
  return (
    <div className="App">
      <Navbar />
      <Form loadOnSubmit={setClick} value={click}/>
      <RetrievedData data={data}/>
    </div>
  );
}

export default App;
