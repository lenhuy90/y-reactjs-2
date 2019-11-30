import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProductImage,ProductInfo} from "./Item"

function App() {
  return (
    <div className="App">
      <ProductImage src="https://noithatdailoi.com/wp-content/uploads/ghe-eames-3-5.jpg" saleText="SALE"></ProductImage>
      <ProductInfo type="FUNITURE" name="Mini Ghế Làm Việc" finalPrice="112.000 USD" price="200.000usd"></ProductInfo>
    </div>
  );
}

export default App;
