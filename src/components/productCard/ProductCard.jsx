import React from 'react'
import {Card,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Button } from '../ui/button'
import { MoveDiagonal, Star, Truck } from 'lucide-react'
import Link from 'next/link'

const ProductCard = ({product}) => {
  return <>
      <Card className="flex flex-col h-full border border-gray-300 pt-0 hover:shadow-2xl duration-300">
                 <div className="relative" />
                  <img
                  src={product.thumbnail}
                  alt="product-cover-image"
                  className="relative object-contain rounded-2xl p-2 w-85 h-75 md:w-100 md:h-100"/>
                   <CardHeader>
                   <CardTitle className="flex items-centergap-5">
                   <span className='text-sm font-bold'> {product.title} : {product.tags[1]} </span>
                  </CardTitle>
                  <span>{product.category}</span>
                  <span className='text-xsm'>{product.brand}</span>
                  </CardHeader>
                    <CardDescription className=" p-3 flex-1">
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="flex items-center justify-between gap-2 ">
                      {[0, 1, 2, 3, 4].map((star ,index) => {
                        const filledStar =
                          star < Math.round(product.rating);
                        return (
                          <React.Fragment key={index}>
                            <Star
                              className={`size-4 ${filledStar ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                            />
                          </React.Fragment>
                        );
                      })}
                      <span className='text-gray-700'>
                        {product.rating}
                      </span>
                    </div>
                     <p className="font-bold text-gray-700">
                      Price: {product.price} EGP
                    </p>
                    </div>
                    <div className='flex items-center p-2 my-1 justify-between flex-wrap'>
                      <span className='flex items-center text-green-800 gap-1'> <Truck className='text-green-800' />{product.shippingInformation}</span>
                      <span>{product.availabilityStatus}</span>
                    </div>
                  </CardDescription>
                  <CardFooter className="w-full">
                    <Link href={`/products/${product.id}`} className='w-full'>
                     <Button className="bg-gray-800 text-white font-bold cursor-pointer my-2 w-full hover:bg-blue-900 duration-300">View Details
                     <MoveDiagonal />
                    </Button>
                    </Link>
                  </CardFooter>
            </Card>
  </>
}

export default ProductCard
