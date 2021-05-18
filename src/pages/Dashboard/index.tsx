import { AddProductModal } from '../../components/AddProductModal'
import { Header } from '../../components/Header'
import { useModal } from '../../hooks/useModal'
import { useProducts } from '../../hooks/useProducts'
import formatPrice from '../../utils/formatPrice'
import { Card, Container, AddButton, Grid } from './styles'

export function Dashboard() {
  const { products } = useProducts()
  const { openModal } = useModal()

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
            <Card key={product._id} to={`/products/${product._id}`}>
              <header>
                <img src={product.picture} alt="" />
              </header>
              <div>
                <h2>{product.name}</h2>
                <p>
                  <em>
                    {formatPrice(product.price)}
                  </em>
                </p>
                <p>{product.amount} {product.amount === 1
                  ? <span>unidade</span>
                  : <span>unidades</span>}
                </p>
                <p>{product.variants.length} {product.variants.length === 1
                  ? <span>variação</span>
                  : <span>variações</span>}
                </p>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  )
}