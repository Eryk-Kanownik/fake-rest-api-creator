import e from 'cors'
import React, { useState } from 'react'

const NewFormInput = ({fieldName,del,sDIF,edit,index}) => {
  let onChange = (value) => {
    sDIF({value,fieldName})
  }
  return (
    <div className='new-form-input'>
        <input type="text" placeholder={fieldName} onChange={(e) => onChange(e.target.value)}/>
        <button onClick={() => del(fieldName)}>Delete</button>
        <button onClick={() => edit({index,oldName:fieldName})}>Edit</button>
    </div>
    
  )
}

export default NewFormInput