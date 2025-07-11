import React from 'react'
import ListComp from './ListComp'

function AppComponent() {

    const movies = [
        {id: 1, name: 'Gaddar 2'},
        {id: 2, name: 'Omg 2'},
        {id: 3, name: 'Krish 2'},
    ]
    const users = [
        {id:1, name: 'Ashish'},
        {id:2, name: 'Sindhu'},
        {id:3, name: 'Bunny'},
    ]

    return (
    <div>
        <ListComp items={movies} title='Movie List'/>
        <hr/>
        <ListComp items={users} title='Users List'/>
      
    </div>
  )
}

export default AppComponent
