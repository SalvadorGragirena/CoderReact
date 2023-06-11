import React, { Fragment } from "react";
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';



const ContainerCategoria = () => {
    const { cat } = useParams();

    return (
        <Fragment>
           <ItemListContainer greeting={`Productos de categoria ${cat}`} category = {cat}/>           
        </Fragment>
        
    );
}

export default ContainerCategoria;