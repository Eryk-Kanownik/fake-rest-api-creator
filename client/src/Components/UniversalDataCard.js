import React from 'react'

const UniversalDataCard = ({data}) => {
  return (
    <div>
        {Object.entries(data).map(([key,value]) => `${key} : ${value}`)}
    </div>
  )
}

export default UniversalDataCard