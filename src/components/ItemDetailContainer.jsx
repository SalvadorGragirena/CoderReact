import React, { useEffect, useState } from 'react';
import { getProducts } from './data/FakeApi'
import ItemDetail from './ItemDetail';
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => setDetalleProducto(res.find((item) => item.id === id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>{loading ? <Loader /> : <ItemDetail {...detalleProducto} />}</div>
  );
};

export default ItemDetailContainer;