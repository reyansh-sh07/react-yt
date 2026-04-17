import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // Following is an example as similar to the one i have learned in JS.
  // async function getDataaa(){
    //   const responsee = await fetch ("API ka link ayega  idhr...")
    // const dataaa = await reponsee.json()
    //   console.log (reponsee);
    //   console.log (dataaa);
  // }


  // FOLLOWING IS A NEW METHOD TAUGHT BY A GUY IN SHERIYAN :D =>
  // its just replacement for fetch !
  // WE GOTA RUN  :  npm i axios , to install it first  nd then import it in the top ...
  // its a third party library nd we use this because it handels the erors more efficiently...and many moree...
  const [data, setData] = useState([])

  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
    
    
  }
  return (
    <div>
      {/* <button onClick={getDataaa}>Get Dataaa</button> */}


      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App