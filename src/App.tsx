import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { ModalProvider } from './hooks/useModal'

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
