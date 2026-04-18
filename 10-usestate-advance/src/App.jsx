import React, { useState } from 'react'

const App = () => {

  
  const [arr, setArr] = useState([10,20,30])
  const [num, setNum] = useState(10)


  const btnClicked2 = () => {
    const newArray = [...arr]
    // or wwe can use it as const newArray = [...arr,40]
    newArray.push(40)
    setArr(newArray)
  }

  const btnClicked = () => {
    setNum(prev => (prev + 1))     
// Dont get confused....here, prev is assigned to an arrow function and it can be named anythng....it will hold the previous value..
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>

      <h1>{arr}</h1>
      <button onClick={btnClicked2}>click</button>
    </div>
  )
}

export default App