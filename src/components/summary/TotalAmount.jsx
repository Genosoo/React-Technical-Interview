import React from 'react'

export default function TotalAmount({totalAmount}) {
  return (
    <div className='summary-box'>
        <p>Total Amount: ₱{totalAmount}</p>
    </div>
  )
}
