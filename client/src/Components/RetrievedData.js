import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UniversalDataCard from './UniversalDataCard';

const RetrievedData = ({loadData}) => {
    const [data,setData] = useState([])
    useEffect(() => {
      async function fetchData(){
        let response = await axios.get('http://localhost:2000/get') 
        setData(response.data)
        console.log(response.data)
      }
      fetchData();
    },[loadData])
    
  return (
    <div>
       {data.map(e => <UniversalDataCard data={e} />)}
    </div>
  )
}

export default RetrievedData