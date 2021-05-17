import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { ModalProvider } from './hooks/useModal'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ModalProvider>
    </>
  );
}

export default App;
