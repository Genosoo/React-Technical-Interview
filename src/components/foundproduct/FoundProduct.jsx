import React from 'react'

export default function FoundProduct({foundProduct, quantity, setQuatity, handleAddToCart}) {
  return (
    <div className='product-container'>
          <div className='product-box'>
            <div>
              <span>Product ID</span>
              <input disabled type="text" value={foundProduct?.productId ?? ''} readOnly/>
            </div>
           <div>
              <span>Product Name</span>
              <input disabled  type="text" value={foundProduct?.name ?? ''} readOnly/>
            </div>
            <div>
              <span>Cost</span>
              <input disabled  type="text" value={foundProduct?.cost ?? ''} readOnly/>
            </div>

              {/* quantity */}
          <div>
              <span>Quantity</span>
            <input 
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuatity(e.target.value)}  
            />
          </div>

          </div>
          <button className='btn-addtocart' onClick={handleAddToCart}>Add To Cart</button>
      </div>
  )
}
