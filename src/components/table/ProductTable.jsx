import React from 'react'

export default function ProductTable({cart, handleRemoveProduct}) {
  return (
     <div className='table-container'>
      <h2>Ordered List</h2>
          <table className='table'>
             <thead>
              <tr>
                  <th>Product Name</th>
                  <th>Cost</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Action</th>
              </tr>
             </thead>
             <tbody>
                 {cart.map((item) => (
                  <tr key={item.productId}>
                     <td>{item.name}</td>
                     <td>{item.cost}</td>
                     <td>{item.quantity}</td>
                     <td>₱{item.cost * item.quantity}</td>
                     <td>
                        <button className='btn-remove' onClick={() => handleRemoveProduct(item.productId)}>remove</button>
                     </td>
                  </tr>
                 ))}
             </tbody>
         </table>
     </div>
  )
}
