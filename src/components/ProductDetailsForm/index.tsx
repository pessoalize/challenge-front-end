import { Field, Formik } from "formik";
import { Form } from "./styles";

type Product = {
  amount: number
  picture: string
  name: string
  price: number
  description: string
}

interface ProductDetailsFormProps {
  onSubmit(product: Product): Promise<void>
  submitButtonText: string
  initialValues?: Product
}

export function ProductDetailsForm({ onSubmit, submitButtonText, initialValues = {
  name: '',
  description: '',
  picture: '',
  price: 0,
  amount: 0
} }: ProductDetailsFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(product) => onSubmit(product)}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Nome
          <Field name="name" type="text" />
          </label>
          <label>
            URL da imagem
          <Field name="picture" type="text" />
          </label>
          <label>
            Descrição
          <Field name="description" component="textarea" />
          </label>
          <label style={{ width: '45%' }}>
            Preço
          <Field name="price" type="number" />
          </label>
          <label style={{ width: '45%' }}>
            Quantidade
          <Field name="amount" type="number" />
          </label>
          <button type="submit" disabled={isSubmitting}>{submitButtonText}</button>
        </Form>
      )}
    </Formik>
  )
}