import React from 'react'

export default function ButtonSaveTransaction({handleSaveTransaction}) {
  return (
    <button className='btn-savetransac' onClick={handleSaveTransaction}>Save Transaction</button>
  )
}
