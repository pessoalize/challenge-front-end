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
  description: string
}

interface EditVariantModalProps {
  productId: string;
  variantId: string;
}

export function EditVariantModal({ productId, variantId }: EditVariantModalProps) {
  const { closeModal } = useModal()

  const { getProduct } = useProducts()

  const product = getProduct(productId)

  if (!product) return null;

  const variant = product.variants.find(variant => variant._id === variantId);

  if (!variant) return null;

  const { amount, name, price, picture } = variant;

  console.log({ variant })

  async function handleEditVariant(variant: Omit<Variant, 'id'>) {
    try {
      console.log(variant)
      await api.put(`/products/variant/${variantId}`, variant)
      toast.success('Variação editada com sucesso!')
    } catch (err) {
      console.log(err)
      toast.error('Ocorreu um erro ao editar a variação!')
    } finally {
      closeModal()
    }
  }

  return (
    <Container>
      <header>Editar Variação</header>
      <small>Variação do produto <b>{product.name}</b></small>
      <VariantDetailsForm
        onSubmit={handleEditVariant}
        submitButtonText="Editar Variação"
        initialValues={{
          name,
          picture,
          amount,
          price,
        }}
      />
    </Container>
  )
}