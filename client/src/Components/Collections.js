import React from 'react'
import CollectionCard from './CollectionCard'

const Collections = ({collections}) => {
    
  return (
    <div className='collection-list'>
        Collections:
        {
            collections.map((e) => <CollectionCard data={e} />)
        }
    </div>
  )
}

export default Collections