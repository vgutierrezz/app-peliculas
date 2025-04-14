import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MovieApp } from './MovieApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieApp/>
  </StrictMode>,
)
