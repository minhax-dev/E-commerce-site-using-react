import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'

const ProductsDetail = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState([])

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetail
