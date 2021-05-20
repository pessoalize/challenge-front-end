import styled from 'styled-components'

export const Container = styled.div`
  header {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  small {
    font-size: .875rem;
    display: block;
    padding-bottom: 1.5rem;
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
    background: var(--red-500);
    transition: filter .2s;
    margin-left: auto;
    &:hover {
      filter: brightness(.9)
    }
  }
`