import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('hello');
  }
  function mouseEntered(){
    console.log("Mouse Entered !")
  }
  function inputChanging(val){
    console.log(val);
  }
  return (
    <div>
      <button onClick={btnClicked} onMouseEnter={mouseEntered}>
        Click
      </button>
{/* We can set as many functions as we want to an even handler, but make sure not to call them at the same time ...  */}
    
{/* Below is an example of how we can set a function directly to an an event handler. */}
      <button onClick={function(){
        console.log("Hlo !!!");
      }}>
        Clcik Here ^_^
      </button>

{/* Below is an example of how we can set a function to an event handler and pass it a parameter. We can also use an arrow function instead of the normal function. */}
      <input type = "text" placeholder='Enter somethng'
      onChange={function(e){
        inputChanging(e.target.value);
      }}>
      </input>
    </div>
  )
}

export default App