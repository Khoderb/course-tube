
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './components/CartContext'

const App = () => {
 

  
  return (
          <CartContextProvider>
              <BrowserRouter>
                <Navbar/>
                  <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/:idCat" element={<ItemListContainer/>} />
                    <Route path="/category/:idCategory" element={<ItemListContainer/>} />
                    <Route path="/item/:idNumber" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />
                  </Routes>
              </BrowserRouter>
          </CartContextProvider>
  );
}

export default App;


