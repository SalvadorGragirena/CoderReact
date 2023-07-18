import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  
  const style_left = {
    marginLeft: '10px'
}
  
  return (
    
      <div>
        <button className="btn btn-dark" onClick={restar}> - </button>
        <span className="btn ">{count}</span>
        <button className="btn btn-dark" onClick={sumar}> + </button> 
      
      <button  style={style_left}
        className="btn btn-dark"
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
      >
        Añadir
      </button>
      </div>
    
  );
};

export default ItemCount;
