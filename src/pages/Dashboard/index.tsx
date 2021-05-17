import { useEffect, useState } from 'react'
import { AddProductModal } from '../../components/AddProductModal'
import { Header } from '../../components/Header'
import { useModal } from '../../hooks/useModal'
import socket from '../../services/socket'
import { Card, Container, AddButton, Grid } from './styles'

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
  const { openModal } = useModal()

  useEffect(() => {
    socket.on('GET_ALL_PRODUCTS', (products: Product[]) => {
      setProducts(products)
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <header>
          <h1>Produtos</h1>
          <AddButton onClick={() => openModal(<AddProductModal />)}>Novo Produto</AddButton>
        </header>
        <Grid>
          {products.map((product) => (
            <Card key={product._id}>
              <header>
                <img src={product.picture} alt="" />
              </header>
              <div>
                <h2>{product.name}</h2>
                Price: {product.price}
                Amount: {product.amount}
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  )
}