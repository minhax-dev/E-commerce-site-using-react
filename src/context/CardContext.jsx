import React, { createContext, useState } from 'react'
import { getProductById } from '../data/products';

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

  function getCartItemsWithProducts() {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function getCartTotal() {
    const total = cartItems.reduce((sum, item) => {
      const product = getProductById(item.id)
      return sum + (product ? product.price * item.quantity : 0)
    }, 0)
    return total
  }

  function clearCart() {
    setCartItems([])
  }


  return (
    <CardContext.Provider value={{
      addToCart,
      cartItems,
      getCartItemsWithProducts,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      clearCart
    }}>
      {children}
    </CardContext.Provider>
  )

}

export default CardContext
