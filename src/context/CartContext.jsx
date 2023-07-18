import React, { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);

    const addToCart = (product, count) => {
        if (isInCart(product.id)) {
            console.log("Ya esta el producto en carrito");
        }
        else {
            console.log(`Agregaste ${product.name}, cantidad ${count}.`);
            const newObj = {
                item: product,
                count
            }
            setCartArray([...cartArray, newObj])
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id);
        setCartArray(updatedCart);
    }

    const clearCart = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.item.id === id)
    }

    const restarItem = (id) => {
        setCartArray(prevState =>
            cartArray.map(obj => ((obj.item.id === id && (obj.count > 0)) ? { ...obj, count: obj.count - 1 } : obj))
        );
      };
     
    
      const sumarItem = (id) => {
        setCartArray(prevState =>
            cartArray.map(obj => ((obj.item.id === id && (obj.count < obj.item.stock)) ? { ...obj, count: obj.count + 1 } : obj))
        );
      };
     

   const getQuantity = (id) => {
    if (cartArray.length){
        let cant = 0
        cartArray.forEach((e) => cant += e.count )
        return cant;
    } else{
         return 0;
    } 
   };

   const totalCarrito = () => {
    let cant = 0
        cartArray.forEach((e) => cant += e.item.price*e.count )
        return cant;
   };

    const value = {
        cartArray,
        totalCarrito,
        getQuantity,
        addToCart,
        deleteItem,
        clearCart,
        isInCart,
        sumarItem,
        restarItem
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider