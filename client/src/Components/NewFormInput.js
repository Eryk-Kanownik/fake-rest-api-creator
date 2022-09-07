import e from 'cors'
import React, { useState } from 'react'

const NewFormInput = ({fieldName,del,sDIF}) => {
  let onChange = (value) => {
    sDIF({value,fieldName})
  }
  return (
    <div className='new-form-input'>
        <label htmlFor="input">{fieldName}:</label>
        <input type="text" id="input" onChange={(e) => onChange(e.target.value)}/>
        <button onClick={() => del(fieldName)}><strong>&times;</strong></button>
    </div>
    
  )
}

export default NewFormInput