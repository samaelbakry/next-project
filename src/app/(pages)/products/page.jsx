import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ProductCard from '@/components/productCard/ProductCard';
import { getAllProducts } from '@/services/get-products-services'
import React from 'react'

const Products = async () => {
    
const { products } = await getAllProducts()    
  return <>
 <div className='my-5'>
    <BreadCrumb/>
     <div className="max-w-7xl mx-auto p-5 rounded-2xl my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
    { products &&
    products.slice(0, 8).map((prod)=>(
        <div key={prod.id}>
            <ProductCard product={prod}/>
        </div>
    ))}
  </div>
 </div>
  </>
}

export default Products
