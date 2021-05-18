import { useModal } from "../../hooks/useModal"
import { useProducts } from "../../hooks/useProducts"
import api from "../../services/api"
import { Container } from "./styles"

interface DeleteVariantModalProps {
  productId: string;
  variantId: string;
}

export function DeleteVariantModal({ productId, variantId }: DeleteVariantModalProps) {
  const { closeModal } = useModal()

  const { getProduct } = useProducts()

  const product = getProduct(productId)

  if (!product) return null;

  const variant = product.variants.find(variant => variant._id === variantId)

  if (!variant) return null;

  async function handleDeleteVariant() {
    try {
      console.log(product)
      await api.delete(`/products/variant/${variantId}`)
    } catch (err) {
      console.log(err)
    } finally {
      closeModal()
    }
  }

  return (
    <Container>
      <header>Exluir Variação</header>

      <small>Variação do produto <b>{product.name}</b></small>

      <p>
        Deseja realmente excluir a variação <b>{variant.name}</b>?
      </p>

      <button onClick={handleDeleteVariant}>
        Excluir Variação
      </button>
    </Container>
  )
}