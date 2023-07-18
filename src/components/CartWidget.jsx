import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';


const CartWidget = () => {

  const { getQuantity } = useContext(CartContext);

  return (
    <div>
      <Link to="/CartContainer">
         <FaShoppingCart size={'2rem'} color={'purple'} />
      </Link>

      <span style={{ marginLeft: '10px' }}>{getQuantity()}</span>
      
    </div>
  );
};

export default CartWidget;

