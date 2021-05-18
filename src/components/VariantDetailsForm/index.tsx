import { Field, Formik } from "formik";
import { Form } from "./styles";

type Product = {
  amount: number
  picture: string
  name: string
  price: number
}

interface VariantDetailsFormProps {
  onSubmit(product: Product): Promise<void>
  submitButtonText: string
  initialValues?: Product
}

export function VariantDetailsForm({ onSubmit, submitButtonText, initialValues = {
  name: '',
  picture: '',
  price: 0,
  amount: 0
} }: VariantDetailsFormProps) {
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