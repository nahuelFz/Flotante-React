import ReactDOM from 'react-dom/client'
import App from './App'
import { ResultadosProvider } from './context/ResultadosContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ResultadosProvider>
    <App />
  </ResultadosProvider>
)
