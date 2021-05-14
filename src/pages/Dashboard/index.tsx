import { useEffect, useState } from 'react'
import socket from '../../services/socket'

type Product = {
  _id: string
  amount: number
  picture: string
  name: string
  price: number
  description: string
}

export function Dashboard() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    socket.on('GET_ALL_PRODUCTS', (products: Product[]) => {
      setProducts(products)
    })
  }, [])

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.picture} alt="" />
            Name: {product.name}
            Price: {product.price}
            Amount: {product.amount}
          </div>
        ))}
      </div>
    </>
  )
}