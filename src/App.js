import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailCointainer from './Components/ItemDetailCointainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Cart from './Components/Cart';
import CartContextProvider from './Components/CartContextProvider';
import Formulario from './Components/Formulario';
import FinCompra from './Components/FinCompra';

export default function App() {


  return (
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route 
                  path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailCointainer/>} />
                <Route path="/cartdetail" element={<Cart/>} />
                <Route path="/form" element={<Formulario/>} />
                <Route path="/fincompra" element={<FinCompra/>} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
  )
}


