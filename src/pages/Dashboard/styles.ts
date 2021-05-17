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