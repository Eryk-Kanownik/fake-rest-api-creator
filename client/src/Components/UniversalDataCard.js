import React from 'react'
import axios from 'axios'

const UniversalDataCard = ({data,setData}) => {
  let del = async (id) => {
    let response = await axios.delete(`http://localhost:2000/delete/${id}`);
    console.log(response.data)
    setData([...response.data])
  }

  //let edit = async (id,field,value) => {

  //}

  return (
    <div className='universal-data-card'>
      <div className='close' onClick={() => del(data.id)}>
        &times;
      </div>
      <span className='curly-bracket-left'>{"{"}</span>
        <ul className='udc-list'>
        {Object.entries(data).map(([key,value]) => <li key={key}><span className='key'>"{key}"</span> : <span className='value'>"{value}",</span></li>)}
        </ul>
      <span className='curly-bracket-right'>{"}"}</span>
    </div>
  )
}

export default UniversalDataCard