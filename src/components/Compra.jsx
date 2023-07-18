import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import CompraItem from "./CompraItem";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/data";


const Compra = () => {

    const { pedidoId, setPedidoId } = useState("");
    const { register, handleSubmit } = useForm();
    const { cartArray, clearCart, totalCarrito } = useContext(CartContext);  

    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: cartArray,
            total: totalCarrito()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
            })
    }

    if(pedidoId){
        return(
            <div className="container">
                <h1 className="title">Muchas gracias por comprar</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

            <div>
                {cartArray.length === 0 &&
                    <div>
                        <p>No hay productos en carrito</p>
                        
                    </div>
                }
                {cartArray.length > 0 && cartArray.map(prod => <CompraItem key={prod.item.id} product={prod} />)}
                <p>Total a pagar: {totalCarrito()}</p>
            </div>
            
        </form>
    </div>

  )
}
export default Compra;