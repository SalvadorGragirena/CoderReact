
import './App.css';
import { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Nosotros from "./components/Nosotros";
import ItemDetailContainer from './components/ItemDetailContainer';
import ContainerCategoria from './components/ContainerCategoria';
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Categoria/:cat" element={<ContainerCategoria />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </Fragment>
  );
}

export default App;