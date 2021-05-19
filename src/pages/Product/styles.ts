import styled from 'styled-components'

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
    color: var(--gray-100);

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 2rem;
      color: var(--gray-900)
    }
  }
`

export const BackButton = styled.button`
  background: transparent;
  width: 3rem;
  height: 3rem;
  border: none;
  color: var(--white);
  font-size: 3rem;
`

export const MainProduct = styled.div`
  border-radius: .25rem;
  overflow: hidden;
  text-decoration: none;
  background: var(--gray-100);
  margin-bottom: 4rem;

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 24rem;
  }
  
  > div:first-child {
    background: var(--gray-500);
    display: flex;
    min-height: 12rem;
    justify-content: center;
    align-items: center;
    img {
      min-width: 17rem;
      max-width: 100%;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      font-size: 1.5rem;
      padding: 1rem 1rem .5rem;
      color: var(--gray-900);
    }

    p {
      padding: .5rem 1rem;
      color: var(--gray-700);

      em {
        font-size: 2rem;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem 1rem 1rem;

      button {
        @media (min-width: 720px) {
          width: auto;
          padding: 0 1.5rem;
        }
        span {
          margin-left: .5rem;
          display: none;
          @media (min-width: 720px) {
            display: block;
          }
        }
      }
    }
  }
`

export const ActionButton = styled.button`
  height: 3rem;
  width: 3rem;
  background: var(--blue-900);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 700;
  border: none;
  border-radius: .25rem;
  transition: filter .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1rem;

  &:hover {
    filter: brightness(.6)
  }

  &:first-of-type {
    margin-left: auto;
  }  

  & + button {
    margin-left: 1rem;
  }

  span {
    font-size: 1rem;
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
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  border-radius: .25rem;
  overflow: hidden;
  text-decoration: none;

  header {
    background-color: var(--gray-500);
    width: 100%;
    min-height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  > div {
    padding: 1rem;
    background: var(--gray-100);
    color: var(--gray-700);

    h3 {
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

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 1rem;
    background: var(--gray-100);
  }
 `