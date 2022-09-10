import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UniversalDataCard from './UniversalDataCard';

const RetrievedData = ({data}) => {
  return (
    <div>
       <div className='retrieved-data'>
        {data.map((e,key) => <UniversalDataCard key={e.id} data={e} />)}
      </div>
    </div>
   
  )
}

export default RetrievedData