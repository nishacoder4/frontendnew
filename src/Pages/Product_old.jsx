import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrum/Breadcrums_old';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';


const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (

    <div>
      <Breadcrums product={product}/>
    </div>
  )
}

export default Product
