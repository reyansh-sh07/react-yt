import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [aloo, setA] = useState(0)
  const [bengun, setB] = useState(0)

  function aChanging() {
    console.log('A ki value change ho gyi');
  }

  function bChanging() {
    console.log('B ki value change ho gyi');
  }

  // so the use of useEffect is that we can run a function whenever a state changes...or we can say that we can run a function whenever a component renders...or we can say that we can run a function whenever a component mounts...or we can say that we can run a function whenever a component unmounts...so basically it has many uses...but the most common use is to run a function whenever a state changes...
  // here everytime the state of aloo changes the function aChanging will run and every time the state of bengun changes the function bChanging will run...so we can say that we can run a function whenever a state changes...or we can say that we can run a function whenever a component renders...or we can say that we can run a function whenever a component mounts...or we can say that we can run a function whenever a component unmounts...so basically it has many uses...but the most common use is to run a function whenever a state changes...
  //even when the values first initialised it gonna run once..
  useEffect(function(){
    aChanging()
  })

  // this thing in "[]" is called depencency array
  // we can ignore it so it gonna run everytime any change happenes on the page...even if bengun changes...
  // we can lve it empty : [] , so it gonna run only once when the component mounts...and then it will never run again...even if aloo changes or bengun changes...
  
  useEffect(function(){
    bChanging()
  },[bengun])

  return (
    <div>
      <h1>A is {aloo}</h1>
      <h1>B is {bengun}</h1>

      <button onClick={() => { setA(aloo + 1) }}>  Change A</button>
      <button onClick={() => {setB(bengun - 1)}}>  Change B</button> 

    </div>
  )
}

export default App