import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import CardContext from '../context/CardContext'

const ProductsDetail = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { cartItems, addToCart } = useContext(CardContext)

  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";



  useEffect(() => {
    const findProduct = getProductById(id)

    if (!findProduct) {
      navigate('/')
      return;
    }
    setProduct(findProduct)

  }, [id])


  if (!product) {
    return <h1>Loading</h1>
  }


  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className='product-detail-name'>{product.name}</h1>
            <p className='product-detail-price'>${product.price}</p>
            <p className='product-detail-description'>{product.description}</p>

            <div className="product-detail-button">
              <button className='btn btn-primary' onClick={() => addToCart(product.id)}>Add to cart {productQuantityLabel}</button>
              <button className='btn btn-secondary' onClick={() => { navigate('/') }}  >Back to Home</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetail
