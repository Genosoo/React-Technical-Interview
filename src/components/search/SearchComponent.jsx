import React from 'react'

export default function SearchComponent({searchProductID, setSearchProductID, handleSearch}) {
  return (
     <div className='search-box'>
        <span>Search Product ID</span>
        <input 
          type="text" 
          value={searchProductID} 
          placeholder='Search for Product Id' 
          onChange={(e) => setSearchProductID(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

  )
}
