import { Form as FormikForm } from 'formik';
import styled from 'styled-components'

export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  label {
    width: 100%;
    & + label {
      margin-top: 1.5rem;
    }
  }

  input {
      margin-top: .5rem;
      font-size: 1rem;
      padding: 1rem;
      width: 100%;
      display: block;
      border-radius: .25rem;
      border: 1px solid var(--gray-700)
  }

  input {
    height: 3rem;
  }

  button {
    margin-top: 2rem;
    border: none;
    border-radius: .25rem;
    color: var(--white);
    padding: 0 1.5rem;
    height: 3rem;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    background: var(--green-300);
    transition: filter .2s;
    margin-left: auto;
    &:hover {
      filter: brightness(.9)
    }
  }
`