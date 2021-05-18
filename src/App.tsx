import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { ModalProvider } from './hooks/useModal'
import { ProductsProvider } from './hooks/useProducts'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <ProductsProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ModalProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
