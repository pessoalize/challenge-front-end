import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { ModalProvider } from './hooks/useModal'
import { ProductsProvider } from './hooks/useProducts'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProductsProvider>
          <ModalProvider>
            <Routes />
          </ModalProvider>
        </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
