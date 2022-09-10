import React from 'react'

const UniversalDataCard = ({data}) => {
  return (
    <div className='universal-data-card'>
      <span className='curly-bracket-left'>{"{"}</span>
        <ul className='udc-list'>
        {Object.entries(data).map(([key,value]) => <li key={key}><span className='key'>"{key}"</span> : <span className='value'>"{value}",</span></li>)}
        </ul>
      <span className='curly-bracket-right'>{"}"}</span>
    </div>
  )
}

export default UniversalDataCard