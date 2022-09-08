import React from 'react'

const ClearServerArray = ({clearBackend}) => {
  return (
    <button onClick={() => clearBackend()}>Clear Server Array</button>
  )
}

export default ClearServerArray