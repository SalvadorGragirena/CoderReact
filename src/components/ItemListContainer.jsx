import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from './data/FakeApi'
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/data";


const ItemListContainer = ({ greeting, category }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cat } = useParams();

  useEffect(() => {
   
    const productosRef = collection(db, "productos");

    const q = category ? query(productosRef, where("category", "==", category)) : query(productosRef, where("top", "==", true));

    getDocs(q)
     .then((resp) => {
      

      setListaProductos(
      resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id}
      })
     )
    })
  }, [cat]);



  return (
    <div>
      <h2 style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center'}}>
        {greeting}{' '}
      </h2>
      {loading ? <Loader /> : <ItemList listaProductos={listaProductos} />}
    </div>
  );
};

export default ItemListContainer;