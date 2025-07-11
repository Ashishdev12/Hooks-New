import React from 'react'

function Home() {

  return (
    <div style={styles.panel}>
      Hello Ashish Kumar Devakate
    </div>
  )
}

const styles = {
   panel: {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    color: "#333",
    fontSize: "18px",
    fontWeight: "500",
    margin: "20px auto",
    maxWidth: "400px"
  }}

export default Home
