// In this example we did by removing react.memo from expensivepost and we used usememo and wrapped our expensive component in that by doing this we consume less memory compare to using react.memo in line 22

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

function Example2() {
    const [posts, setPosts] = useState(samplePosts)
    const [count, setCount] = useState(0)

    const addPost = useCallback(() => {
        setPosts([...posts,{id:Date.now(), title:"I am new post"}])
    },[posts])

    const ExpensivePostMemo = useMemo(()=>{

         return <ExpensivePost posts={posts} addPost={addPost}/>
    },[posts, addPost])
   
  return (
    <div>
        {ExpensivePostMemo} 
      <button onClick={()=>setCount(count+1)}>{count}</button>
      
    </div>
  )
}

export default Example2
 