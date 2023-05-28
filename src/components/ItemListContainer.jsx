import React from 'react';


const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <h2 style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center'}}>
        {greeting}{' '}
      </h2>
    </div>
  );
};

export default ItemListContainer;
