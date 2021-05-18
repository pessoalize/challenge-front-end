import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem 3rem;

  > header {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    margin-bottom: 2.5rem;
    color: var(--gray-100)
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

  @media(min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Card = styled(Link)`
  border-radius: .25rem;
  overflow: hidden;
  text-decoration: none;
  transition: filter .2s;

  &:hover {
    filter: drop-shadow(0 0 8px var(--gray-700))
  }

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
      color: var(--gray-900);
      padding-bottom: .5rem;
    }

    p {
      padding: .25rem 0;

      em {
        font-size: 1.5rem;
      }
    }
 }
`