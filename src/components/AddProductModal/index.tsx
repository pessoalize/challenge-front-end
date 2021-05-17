import { useModal } from "../../hooks/useModal"
import api from "../../services/api"
import { ProductDetailsForm } from "../ProductDetailsForm"
import { Container } from "./styles"

type Product = {
  id: string
  amount: number
  picture: string
  name: string
  price: number
  description: string
}

export function AddProductModal() {
  const { closeModal } = useModal()

  async function handleAddProduct(product: Omit<Product, 'id'>) {
    try {
      console.log(product)
      await api.post('products/create', product)
    } catch (err) {
      console.log(err)
    } finally {
      closeModal()
    }
  }

  return (
    <Container>
      <header>Novo Produto</header>
      <ProductDetailsForm
        onSubmit={handleAddProduct}
        submitButtonText="Adicionar Produto"
      />
    </Container>
  )
}