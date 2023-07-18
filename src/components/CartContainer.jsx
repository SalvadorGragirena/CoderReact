import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const BtnCompra = {
    display: "flex",
    justifyContent: "center",
    margin: "10px"
  };

const CartContainer = () => {

    const { cartArray, totalCarrito } = useContext(CartContext);

    return (
        <div>
            <div>
                {cartArray.length === 0 &&
                    <div>
                        <p>No hay productos en carrito</p>
                        <Link to="/"> Ir a inicio</Link>
                    </div>
                }
                {cartArray.length > 0 && cartArray.map(prod => <CartItem key={prod.item.id} product={prod} />)}
                <p>Total a pagar: {totalCarrito()}</p>
            </div>
            <div  style={BtnCompra} >
              
              <Link to='/Compra'> <Button varian='danger'>COMPRAR</Button> </Link>
            </div>
        </div>
    )
}

export default CartContainer;