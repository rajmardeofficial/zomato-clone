import React from 'react'
import FilterItem from './filterItem/FilterItem'
import './filters.css'

function Filters({filtersList}) {
  return (
    <div className='filters'>
        {
            filtersList && filtersList.map((filter)=>{
                return (
                    <FilterItem key={filter.id} filter={filter}/>
                )
            })
        }
    </div>
  )
}

export default Filters