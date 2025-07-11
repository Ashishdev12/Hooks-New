import React from 'react'
import './Component.css'
import withCollapse from './withCollapse'

function ListComp({items}) {
  return (
    <div className='list-items'>
        {
            items.map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })
        }
    
    </div>
  )
}

export default withCollapse(ListComp);
