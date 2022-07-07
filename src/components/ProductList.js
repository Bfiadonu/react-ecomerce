import React, { Component } from 'react'
import { ProductConsumer } from './ContextAPI.js';
import Title from './Title'

import Product from './Product.js'

export default class ProductList extends Component {

  
  render() {

   
    return (
      <div>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                 return value.products.map(product => {
                  return <Product key={product.id} product=
                  {product} />;
                 })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
     
      
      </div>
      
    )
  }
}
