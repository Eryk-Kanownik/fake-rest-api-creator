import React from 'react'

const CreateScheme = ({add}) => {

  return (
    <button onClick={() => add()}>
      Create Scheme
    </button>
  )
}

export default CreateScheme