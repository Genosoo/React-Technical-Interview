import React, { useState } from 'react'
import { products } from './utils/productData';
import SearchComponent from './components/search/SearchComponent';

export default function App() {
  const [searchProductID, setSearchProductID] = useState("");
  const [quantity, setQuatity] = useState(1);
  const [foundProduct, setFoundProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    const product = products.find(
      (p) => p.productId.toString() === searchProductID.trim());
      setFoundProduct(product || null);
  }


  const handleAddToCart = () => {
    if (!foundProduct) return;
      // If product is already in cart, update the quantity
      const existing = cart.find((c) => c.productId === foundProduct.productId);
          if(existing) {
              setCart(cart.map((c) => c.productId === foundProduct.productId ? 
              { ...c, quantity: c.quantity + Number(quantity)} : c
            )
          );
      } else {
        setCart([...cart, {...foundProduct, quantity: Number(quantity)}]);
      }

      setQuatity(1);
      setSearchProductID("");
      setFoundProduct(null);
  }

  const handleRemoveProduct = (id) => {
    setCart(cart.filter((item) => item.productId !== id))
  }


  return (
   <div>
      <SearchComponent 
        searchProductID={searchProductID} 
        setSearchProductID={setSearchProductID}
        handleSearch={handleSearch}
      />
     

      {/* found product */}
      {foundProduct ? (
          <div>
          <div className='product-box'>
            <div>
              <span>Product ID</span>
              <input type="text" value={foundProduct?.productId ?? ''}/>
            </div>
           <div>
              <span>Product Name</span>
              <input type="text" value={foundProduct?.name ?? ''}/>
            </div>
            <div>
              <span>Cost</span>
              <input type="text" value={foundProduct?.cost ?? ''}/>
            </div>
          </div>
          
          {/* quantity */}
          <div>
            <input 
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuatity(e.target.value)}  
            />
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
      </div>
      ) : (
        searchProductID && <p>No Product found</p>
      )}


      {/* Cart Table */}
      <div>
         <h2>Ordered List</h2>
         {cart.length === 0 ? (
           <p>No item added.</p>
         ): (
          <table>
             <thead>
               <th>Product Name</th>
               <th>Cost</th>
               <th>Quantity</th>
               <th>Amount</th>
               <th>Action</th>
             </thead>
             <tbody>
                 {cart.map((item) => (
                  <tr>
                     <td>{item.name}</td>
                     <td>{item.cost}</td>
                     <td>{item.quantity}</td>
                     <td>₱{item.cost * item.quantity}</td>
                     <td>
                        <button onClick={() => handleRemoveProduct(item.productId)}>remove</button>
                     </td>
                  </tr>
                 ))}
             </tbody>
         </table>
         )}
      </div>
   </div>
  )
}
