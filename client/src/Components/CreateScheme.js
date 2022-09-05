import React from 'react'
import NewFormInput from './NewFormInput'
import SchemeCreator from './SchemeCreator'

const CreateScheme = ({add}) => {

  return (
    <button onClick={() => add()}>
        Create Scheme
        <SchemeCreator />
    </button>
  )
}

export default CreateScheme