import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import ProductsDetail from './pages/ProductsDetail'
import { CardProvider } from './context/CardContext'

function App() {

  return (
    <AuthProvider>
      <CardProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:id' element={<ProductsDetail />} />
          </Routes>
        </div>
      </CardProvider>
    </AuthProvider>
  )
}

export default App
