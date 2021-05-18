import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import socket from "../services/socket";

type Product = {
  _id: string
  amount: number
  picture: string
  name: string
  price: number
  description: string
  variants: Omit<Product, 'variants' | 'description'>[]
}

type ProductsContextData = {
  products: Product[],
  getProduct(id: string): Product | undefined
}

interface ProductsProviderProps {
  children: ReactNode
}

const ProductsContext = createContext({} as ProductsContextData)


export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    socket.on('GET_ALL_PRODUCTS', (products: Product[]) => {
      setProducts(products)
      console.log({ products })
    })
  }, [])

  function getProduct(id: string) {
    return products.find(product => product._id === id)
  }

  return (
    <ProductsContext.Provider value={{ products, getProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductsContext)
}