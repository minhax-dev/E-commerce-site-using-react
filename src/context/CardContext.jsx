import React, { createContext, useState } from 'react'

const CardContext = createContext(null)

export function CardProvider({ children }) {

  // {id : 7, quantity : 3}
  const [cartItems, setCartItems] = useState([])

  function addToCart(productId) {
    // Checking if the item already added in the card so here we check in the cartItems
    // If yes then we will update the quantity by 1 ex: quantity + 1
    const existing = cartItems.find((item) => item.id === productId)

    if (existing) {
      // IF true then we will get the quantity and update by one 
      const currentQuality = existing.quantity;

      const updatedCartItems = cartItems.map((item) =>
        item.id === productId ?
          { id: productId, quantity: currentQuality + 1 }
          : item
      )
      setCartItems(updatedCartItems)


    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }])
    }
  }

  return (
    <CardContext.Provider value={{ addToCart, cartItems }}>
      {children}
    </CardContext.Provider>
  )

}

export default CardContext
