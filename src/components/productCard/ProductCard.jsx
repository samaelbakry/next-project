import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { MoveDiagonal, Star, Truck } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card className="flex flex-col h-full border border-gray-300 hover:shadow-2xl duration-300">
       <div className="flex items-center justify-center">
         <img
          src={product.thumbnail}
          alt={product.title}
          className=" object-contain rounded-2xl w-50 h-50"
        />
       </div>
        <CardHeader className="space-y-1 pb-2">
          <CardTitle className="text-sm font-bold">
            {product.title} : {product.tags?.[1]}
          </CardTitle>
          <span className="text-base text-gray-500">{product.category}</span>
          <span className="text-xs text-gray-400">{product.brand}</span>
        </CardHeader>

        <CardDescription className="px-6 pb-4 flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
             { [0, 1, 2, 3, 4].map((star, i) => (
            <Star key={i} className={`size-4 ${ i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}/>
              ))}
              <span className="text-sm text-gray-600 ml-1">
                {product.rating}
              </span>
            </div>
            <p className="font-semibold text-gray-800 text-sm">
              {product.price} EGP
            </p>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-700 flex items-center gap-1">
              <Truck className="size-4" />
              {product.shippingInformation}
            </span>
            <span>{product.availabilityStatus}</span>
          </div>
        </CardDescription>
        <CardFooter className="w-full">
          <Link href={`/${product.id}`} className="w-full">
            <Button className="bg-gray-800 text-white font-bold cursor-pointer my-2 w-full hover:bg-blue-900 duration-300">
              View Details
              <MoveDiagonal />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
