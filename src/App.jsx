
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './fakestoreapi/products'
import Seemore from './fakestoreapi/seemore'
import Hello from './login'

function App() {
 

  return (
    <>
      <BrowserRouter>
      

      <Routes>
      
      <Route path="/" element={<Hello/>}/>

      <Route path="/products" element={<Products/>}/>

      <Route path="/products/:id" element={<Seemore/>}/>
      
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
