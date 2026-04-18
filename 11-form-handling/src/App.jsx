import React from 'react'

const App = () => {

  function submitHandler(e){
    e.preventDefault()
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App