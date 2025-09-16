import React from 'react'

export default function Cash({cash,setCash}) {
  return (
    <div className='summary-box'>
        <p>Cash:</p>
        <input type="number" placeholder='Enter your cash' min={"0"} value={cash} onChange={(e) => setCash(e.target.value)} />
   </div>
  )
}
