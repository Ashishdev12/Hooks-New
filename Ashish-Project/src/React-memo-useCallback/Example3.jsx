// In this example we keep count and post different components this is best solution

import React, { useCallback, useMemo, useState } from 'react'
import ExpensivePost from './ExpensivePost'

const samplePosts = [
    {id: 1, title: 'I am post1'},
    {id: 2, title: 'I am post2'},
    {id: 3, title: 'I am post3'},
    {id: 4, title: 'I am post4'},
    {id: 5, title: 'I am post5'},
    {id: 6, title: 'I am post6'},
]

const Posts = () =>{
    const [posts, setPosts] = useState(samplePosts)
     const addPost = useCallback(() => {
        setPosts([...posts,{id:Date.now(), title:"I am new post"}])
    },[posts])
    return <ExpensivePost posts={posts} addPost={addPost}/>
}

const Counter = () =>{
       const [count, setCount] = useState(0)
       return ( 
       <button onClick={()=>setCount(count+1)}>{count}</button>
)}

function Example3() {
  
  return (
    <div>
    <Posts/>
    <Counter/>
      
    </div>
  )
}

export default Example3
 