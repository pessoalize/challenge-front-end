import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { ModalProvider } from './hooks/useModal'
import { ProductsProvider } from './hooks/useProducts'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer />
    </>
  );
}

export default App;
