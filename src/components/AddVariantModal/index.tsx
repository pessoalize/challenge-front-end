import { useModal } from "../../hooks/useModal"
import { useProducts } from "../../hooks/useProducts"
import api from "../../services/api"
import { VariantDetailsForm } from "../VariantDetailsForm"
import { Container } from "./styles"
import { toast } from 'react-toastify'

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
      await api.post(`products/variant/create/${productId}`, variant)
      toast.success('Variação adicionada com sucesso!')
    } catch (err) {
      toast.error('Ocorreu um erro ao adicionar a variação!')
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