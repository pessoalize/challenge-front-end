import { useModal } from "../../hooks/useModal"
import { useProducts } from "../../hooks/useProducts"
import api from "../../services/api"
import { VariantDetailsForm } from "../VariantDetailsForm"
import { Container } from "./styles"

type Variant = {
  id: string
  amount: number
  picture: string
  name: string
  price: number
}

interface AddVariantModalProps {
  productId: string;
}

export function AddVariantModal({ productId }: AddVariantModalProps) {
  const { closeModal } = useModal()
  const { getProduct } = useProducts()

  const product = getProduct(productId)

  if (!product) return null

  async function handleAddVariant(variant: Omit<Variant, 'id'>) {
    try {
      console.log(variant)
      await api.post(`products/variant/create/${productId}`, variant)
    } catch (err) {
      console.log(err)
    } finally {
      closeModal()
    }
  }

  return (
    <Container>
      <header>Nova Variação</header>
      <small>Variação do produto <b>{product.name}</b></small>
      <VariantDetailsForm
        onSubmit={handleAddVariant}
        submitButtonText="Adicionar Variação"
      />
    </Container>
  )
}