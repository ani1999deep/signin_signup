import React from 'react'

const Home = () => {
      const logout=()=>{
            localStorage.removeItem("signUp");
            window.location.reload()
      }

      const deleteAccount=()=>{
            localStorage.clear()
            window.location.reload()
      }
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {localStorage.getItem("name")}</p>
      <button onClick={logout} className='logout'>Logout</button>
      <button onClick={deleteAccount} className='delete'>Delete</button>
      </div>
  )
}

export default Home