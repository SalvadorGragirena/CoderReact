import React, { useEffect, useState } from 'react';
import { getProducts } from './data/FakeApi'
import ItemDetail from './ItemDetail';
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/data";

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((resp) => {
        setDetalleProducto(
          { ...resp.data(), id: resp.id }
          );

      })
    
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>{loading ? <Loader /> : <ItemDetail {...detalleProducto} />}</div>
  );
};

export default ItemDetailContainer;