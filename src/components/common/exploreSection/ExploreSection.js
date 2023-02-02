import React from 'react'
import ExploreCard from './exploreCard/ExploreCard'
import './exploreSection.css'

function ExploreSection({list, collectionName}) {
  return (
    <div className='max-width explore-section'>
      <div className="collection-title">
        {collectionName}
      </div>
      <div className="explore-grid">
        {
          list.map((rest, index)=>{
           return <ExploreCard key={index} rest={rest}/>
          })
        }
      </div>
    </div>
  )
}

export default ExploreSection