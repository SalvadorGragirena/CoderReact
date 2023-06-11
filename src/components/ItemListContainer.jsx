import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from './data/FakeApi'
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting, category }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cat } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (category === "NoCategoria") {
          setListaProductos(res.filter((item) => item.top === true));
        } else {
          setListaProductos(res.filter((item) => item.category === category));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
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