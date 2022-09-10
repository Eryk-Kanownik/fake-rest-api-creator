import React from 'react'

const Collections = ({collections}) => {
    
  return (
    <ul className='collection-list'>
        {
            collections.map((e) => <li><a href='#'>{e}</a></li>)
        }
    </ul>
  )
}

export default Collections