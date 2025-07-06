import React from 'react'

function ExpensivePost({posts, addPost}) {
    console.log("Expensive post component called");
    
  return (
    <div>
      {posts.map((item)=>{
        console.log("rendering item", item.id)
        return <h1 key={item.id}>{item.title}</h1>      
      })}
      <button onClick={addPost}>add post</button>
    </div>
  )
}

export default ExpensivePost;
