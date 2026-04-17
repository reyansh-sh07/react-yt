import React from 'react'

const Card2 = (pops) => {
  return (
    <div className='hlo'>
        <img src = {pops.image} />
        <h1>{pops.user}</h1>
        <p>{pops.data}</p>
    </div>
  )
}

export default Card2