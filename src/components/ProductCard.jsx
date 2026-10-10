import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CardContext from '../context/CardContext'

const ProductCard = ({ product }) => {

  const { cartItems, addToCart } = useContext(CardContext)
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className='product-card' >
      <img src={product.image} alt={product.name} className='product-card-image' />
      <div className="product-card-content">
        <h3 className='product-card-name'>{product.name}</h3>
        <p className='product-card-price'>${product.price}</p>

        <div className="product-card-actions">
          <Link className='btn btn-primary' to={`products/${product.id}`} >View Details</Link>
          <button className='btn btn-secondary' onClick={() => {
            addToCart(product.id)
            // console.log('Clicked product id' + product.id);
          }}>Add to cart{productQuantityLabel}</button>
        </div>
      </div>
    </div >
  )
}

export default ProductCard
