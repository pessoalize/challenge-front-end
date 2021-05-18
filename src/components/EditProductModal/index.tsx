import { useModal } from "../../hooks/useModal"
import { useProducts } from "../../hooks/useProducts"
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

interface EditProductModalProps {
  productId: string;
}

export function EditProductModal({ productId }: EditProductModalProps) {
  const { closeModal } = useModal()

  const { getProduct } = useProducts()

  const product = getProduct(productId)

  if (!product) return null;

  const { amount, description, name, price, picture } = product;

  async function handleEditProduct(product: Omit<Product, 'id'>) {
    try {
      console.log(product)
      await api.put(`/products/${productId}`, product)
    } catch (err) {
      console.log(err)
    } finally {
      closeModal()
    }
  }

  return (
    <Container>
      <header>Editar Produto</header>
      <ProductDetailsForm
        onSubmit={handleEditProduct}
        submitButtonText="Editar Produto"
        initialValues={{
          name,
          picture,
          description,
          amount,
          price,
        }}
      />
    </Container>
  )
}