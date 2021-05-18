import { useParams } from "react-router";
import { Header } from "../../components/Header";
import { useProducts } from "../../hooks/useProducts";
import { ActionButton, BackButton, Container, MainProduct, AddButton, Grid, Card } from "./styles";
import { FiChevronLeft, FiEdit, FiTrash } from 'react-icons/fi'
import { useHistory } from 'react-router'
import formatPrice from "../../utils/formatPrice";
import { useModal } from "../../hooks/useModal";
import { EditProductModal } from "../../components/EditProductModal";
import { DeleteProductModal } from "../../components/DeleteProductModal";
import { AddVariantModal } from "../../components/AddVariantModal";
import { DeleteVariantModal } from "../../components/DeleteVariantModal";
import { EditVariantModal } from "../../components/EditVariantModal";

export function Product() {
  const { id } = useParams<{ id: string }>()
  const { getProduct } = useProducts()
  const product = getProduct(id)
  const { goBack } = useHistory();
  const { openModal } = useModal()

  if (!product) return null

  return (
    <>
      <Header />
      <Container>
        <header>
          <h1>{product.name}</h1>
          <BackButton onClick={goBack}><FiChevronLeft /></BackButton>
        </header>

        <MainProduct>
          <div>
            <img src={product.picture} alt="" />
          </div>
          <div>
            <header>
              {product.name}
            </header>
            <p>
              {product.description}
            </p>
            <p>
              <em>
                {formatPrice(product.price)}
              </em>
            </p>
            <p>{product.amount} {product.amount === 1
              ? <span>unidade</span>
              : <span>unidades</span>}
            </p>
            <footer>
              <ActionButton onClick={() => openModal(<EditProductModal productId={product._id} />)}>
                <FiEdit /> <span>Editar</span>
              </ActionButton>
              <ActionButton onClick={() => openModal(<DeleteProductModal productId={product._id} />)}>
                <FiTrash /> <span>Excluir</span>
              </ActionButton>
            </footer>
          </div>
        </MainProduct>

        <header>
          <h2>Variações</h2>
          <AddButton onClick={() => openModal(<AddVariantModal productId={product._id} />)}>
            Nova Variação
          </AddButton>
        </header>

        {!product.variants.length && <p>Nenhuma variação existente.</p>}

        <Grid>
          {product.variants.map(variant => (
            <Card key={variant._id}>
              <header>
                <img src={variant.picture} alt="" />
              </header>
              <div>
                <h3>{variant.name}</h3>
                <p>
                  <em>
                    {formatPrice(variant.price)}
                  </em>
                </p>
                <p>{variant.amount} {variant.amount === 1
                  ? <span>unidade</span>
                  : <span>unidades</span>}
                </p>
              </div>
              <footer>
                <ActionButton
                  onClick={
                    () => openModal(
                      <EditVariantModal productId={product._id} variantId={variant._id} />
                    )
                  }
                >
                  <FiEdit />
                </ActionButton>
                <ActionButton
                  onClick={
                    () => openModal(
                      <DeleteVariantModal productId={product._id} variantId={variant._id} />
                    )
                  }
                >
                  <FiTrash />
                </ActionButton>
              </footer>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  )
}