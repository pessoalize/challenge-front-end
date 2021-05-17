import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  color: var(--gray-100);
  padding: 0 2rem 3rem;

  > header {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    margin-bottom: 2.5rem;
  }
`

export const AddButton = styled.button`
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

  &:hover {
    filter: brightness(.9)
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat( auto-fit, minmax(15rem, 1fr) );
`

export const Card = styled.div`
  border-radius: .25rem;
  overflow: hidden;

  header {
    height: 12rem;
    overflow: hidden;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  > div {
    padding: 1rem;
    background: var(--gray-100);
    color: var(--gray-700);
    h2 {
      color: var(--gray-900)
    }
 }
`