import React, { useState } from 'react'
import './App.css'
import { products } from './utils/productData';
import SearchComponent from './components/search/SearchComponent';
import FoundProduct from './components/foundproduct/FoundProduct';
import ProductTable from './components/table/ProductTable';
import TotalAmount from './components/summary/TotalAmount';
import Cash from './components/summary/Cash';
import Change from './components/summary/Change';
import ButtonSaveTransaction from './components/button/ButtonSaveTransaction';
import SavedTransactions from './components/savedtransaction/SavedTransactions';

export default function App() {
  const [searchProductID, setSearchProductID] = useState("");
  const [quantity, setQuatity] = useState(1);
  const [foundProduct, setFoundProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cash, setCash] = useState("");
  const [transactions, setTransactions] = useState([]); 

  const handleSearch = () => {
    const product = products.find(
      (p) => p.productId.toString() === searchProductID.trim());
      if(!product) {
        alert("No item found")
      }
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
  }

  const handleRemoveProduct = (id) => {
    setCart(cart.filter((item) => item.productId !== id))
  }

  // calculate total cost of cart
  const totalAmount = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0)

  // compute change 
  const change = cash ? Math.max(0, Number(cash) - totalAmount) : 0;

  // Save Transaction
  const handleSaveTransaction = () => {
    if (cart.length === 0) return alert("Cart is empty");
    if(!cash || Number(cash) < totalAmount) return alert("Insufficient cash!");

    const newTransaction = {
      id: Date.now(), // unique ID
      items: cart,
      total: totalAmount,
      cash: Number(cash),
      change,
      date: new Date().toLocaleString(),
    };

    // Add to our list of saved transactions
    setTransactions([...transactions, newTransaction]);


    // reset POS fields
    setCart([]);
    setCash("");
    alert("Transaction saved successfully");
  }

    console.log("transactions:", transactions)

  return (
   <div>
      <SearchComponent 
        searchProductID={searchProductID} 
        setSearchProductID={setSearchProductID}
        handleSearch={handleSearch}
      />
      {/* found product */}
      <FoundProduct 
        foundProduct={foundProduct} 
        quantity={quantity} 
        setQuatity={setQuatity} 
        handleAddToCart={handleAddToCart}
        />

      {/* Cart Table */}
      <ProductTable 
        cart={cart} 
        handleRemoveProduct={handleRemoveProduct}
       />

      <div className='summary-container'>
         {/* summary  */}
       <TotalAmount totalAmount={totalAmount} />
       <Cash cash={cash} setCash={setCash}/>
       <Change change={change} />

       <ButtonSaveTransaction  handleSaveTransaction={handleSaveTransaction}/>
      </div>
        {transactions.length > 0 && (
        <SavedTransactions  transactions={transactions}/>
       )}
   </div>
  )
}
