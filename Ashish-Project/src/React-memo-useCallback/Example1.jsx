// This example by using usecallback we memorize the function addpost so that when were example 1 component re-render we don't want to re-create addpost function again and again this comes at memory cost where ever there is change in props we need to render the addpost function line 18

import React, { useCallback, useState } from 'react'
import ExpensivePost from './ExpensivePost'

const samplePosts = [
    {id: 1, title: 'I am post1'},
    {id: 2, title: 'I am post2'},
    {id: 3, title: 'I am post3'},
    {id: 4, title: 'I am post4'},
    {id: 5, title: 'I am post5'},
    {id: 6, title: 'I am post6'},
]

function Example1() {
    const [posts, setPosts] = useState(samplePosts)
    const [count, setCount] = useState(0)

    const addPost = useCallback(() => {
        setPosts([...posts,{id:Date.now(), title:"I am new post"}])
    },[posts])

   
  return (
    <div>
        <ExpensivePost posts={posts} addPost={addPost}/>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      
    </div>
  )
}

export default Example1
 