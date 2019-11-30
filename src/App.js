import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProductImage,ProductInfo} from "./Item"
import data from "./data.json";

/*

const b = [1,2,3,4].map(elm => elm + 1)

b  = [2,3,4,5]
*/

function App() {
  const productList = data.data;
  return (
    <div className="App">
      {productList.map(elm => (
        <div className="product-item">
          <p>ID: {elm.id}</p>
          <ProductImage src={elm.img_url} saleText={elm.saleText} />
          <ProductInfo
            type={elm.type}
            name={elm.name}
            finalPrice={elm.finalPrice}
            price={elm.price}
          />
        </div>
      ))}
    </div>
  );
}

export default App