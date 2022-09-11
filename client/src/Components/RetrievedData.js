import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UniversalDataCard from './UniversalDataCard';

const RetrievedData = ({data,setData}) => {
  return (
    <div>
       <div className='retrieved-data'>
        {data.map((e,key) => <UniversalDataCard  setData={setData} data={e} />)}
      </div>
    </div>
   
  )
}

export default RetrievedData