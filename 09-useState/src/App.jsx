import React, { useState } from 'react'

const App = () => {

// we can get the below code by typing useCode snippet "usf" and then pressing tab key : 
// here num is a read only value and useState(<value_assigned>) is a function which will return an array of two values, first one is the value assigned to num and second one is a function which will update the value of num.
// while setNum is a function which will update the value of num and it will also trigger a re-render of the component to reflect the updated value of num in the UI.
// now whenever we want to update the value of the num variable, we will call the setNum function. coz we know tht we cant cahnge the value directly by assignment.... instead in React we have to use the setter function provided by useState to update the state and trigger a re-render of the component. so we will call setNum with the new value we want to assign to num, and React will take care of updating the state and re-rendering the component with the new value. this is how we manage state in React using useState hook.
//setNUm is asynchronus function.
const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jump5Num() {
    setNum(num+5)
  }
  function jumpBack5Num() {
    setNum(num-5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={jump5Num}>Increase by 5</button>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpBack5Num}>Decrease by 5</button>
    </div>
  )
}

export default App

// Click and drag, release when you're finished

// useState - stațe ko manage karne ke liye.

// useEffect - side effects handle karne ke liye
// (jaise API call, DOM manipulation, event
// listener).

// useContext - global state ko consume karne ke
// liye without prop drilling.

// useReducer - complex state management ke liye
// (Redux jaisa chhota version).

// useRef - mutable values hold karne ke liye jo re-
// render trigger na karein, ya DOM access karne ke
// liye.

// useMemo & useCallback - optimization ke liye,
// unnecessary re-renders avoid karne ke liye.