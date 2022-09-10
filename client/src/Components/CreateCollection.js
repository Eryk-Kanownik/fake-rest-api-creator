import React from 'react'

const CreateCollection = ({create}) => {
  return (
    <button onClick={() => create()}>Create Collection</button>
  )
}

export default CreateCollection