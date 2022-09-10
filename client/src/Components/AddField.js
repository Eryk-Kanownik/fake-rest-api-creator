import React from 'react'

const AddField = ({add}) => {

  return (
    <button onClick={() => add()}>
      Add Field
    </button>
  )
}

export default AddField