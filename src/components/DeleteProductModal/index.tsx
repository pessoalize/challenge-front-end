import { useHistory } from "react-router"
import { useModal } from "../../hooks/useModal"
import { useProducts } from "../../hooks/useProducts"
import api from "../../services/api"
import { Container } from "./styles"

interface DeleteProductModalProps {
  productId: string;
}

export function DeleteProductModal({ productId }: DeleteProductModalProps) {
  const { closeModal } = useModal()
  const { push } = useHistory()

  const { getProduct } = useProducts()

  const product = getProduct(productId)

  if (!product) return null;

  async function handleDeleteProduct() {
    try {
      console.log(product)
      await api.delete(`products/${productId}`)
    } catch (err) {
      console.log(err)
    } finally {
      closeModal()
      push('/')
    }
  }

  return (
    <Container>
      <header>Exluir Produto</header>

      <p>
        Deseja realmente excluir o produto <b>{product.name}</b>?
      </p>

      <button onClick={handleDeleteProduct}>
        Excluir Produto
      </button>
    </Container>
  )
}