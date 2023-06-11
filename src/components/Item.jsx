import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between", 
  };


const Item = ({ producto }) => {
  const { id, img, name, description, price, stock, hashtags, oferta, top, } = producto;

  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <section style={sectionStyle}>
          <p className="card-text">${price}</p>
          <p className="card-text">{oferta ? 'En oferta 50%' : 'No en oferta'}</p>
        </section>
        <p className="card-text">stock: {stock}</p>
        
      </div>
      {show && (
        <>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
          <p className="card-text">{description}</p>
          <Link to={`/item/${id}`}>Ir al detalle</Link>
        </>
      )}
      <button className="btn btn-primary" onClick={showHandler}>
        {show ? 'Ver Menos' : 'Ver Mas'}
      </button>
    </div>
  );
};


export default Item;