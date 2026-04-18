import React from 'react'

const App = () => {

  const user = {
    username: 'Sarthak',
    age: 18,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  return (
    <div>
      <h1> user = {user.username}</h1>
      <h3> age = {user.age}</h3>
      <h2> city = {user.city}</h2>
    </div>
  )
}

export default App