
import './App.css';
import { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Nosotros from "./components/Nosotros";
import Compra from "./components/Compra";
import ItemDetailContainer from './components/ItemDetailContainer';
import ContainerCategoria from './components/ContainerCategoria';
import CartContainer from './components/CartContainer';
import Footer from "./components/Footer";
import CartProvider from './context/CartContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Fragment>
      <CartProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Categoria/:cat" element={<ContainerCategoria />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="/Compra" element={<Compra />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;