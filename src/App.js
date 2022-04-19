import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailCointainer from './Components/ItemDetailCointainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Cart from './Components/Cart';


export default function App() {


  return (
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer/>} 
                />
                <Route path="/item/:id" element={<ItemDetailCointainer/>} />
                <Route path="/cart" element={<Cart/>} />
              </Routes>
          </BrowserRouter>


  )
}


