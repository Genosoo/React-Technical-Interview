import React from 'react'

export default function SavedTransactions({transactions}) {
  return (
     <div className='st-container'>
             <h2>Saved Transactions</h2>
             <ul>
                {transactions.map((t) => (
                  <li key={t.id}>
                    <p><b>Date:</b> {t.date}</p>
                    <p><b>Total:</b> ₱{t.total}</p>
                    <p><b>Cash:</b> ₱{t.change}</p>
                    <p><b>Items:</b> {t.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}</p>
                  </li>
                ))}
             </ul>
         </div>
  )
}
