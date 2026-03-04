import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import { getProductDetails } from "@/services/get-product-details-services";
import { Star, Truck, User } from "lucide-react";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  const productDetails = await getProductDetails(productId);
  return (
    <>
   <div className="my-5">
     <BreadCrumb postDetails/>
      <div className="max-w-6xl mx-auto p-5 rounded-2xl my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 space-y-3 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow p-10">
          <p className="font-semibold text-base md:text-2xl text-blue-950">
            All you need to knew about :
          </p>
          <span className="text-gray-500 text-base">
            {productDetails.title} . {productDetails.category} .{" "}
            {productDetails.brand}
          </span>
          <div className="flex items-center justify-between flex-wrap ">
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((star, index) => {
                const filledStar = star < Math.round(productDetails.rating);
                return (
                  <React.Fragment key={index}>
                    <Star
                      className={`size-4 ${filledStar ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />
                  </React.Fragment>
                );
              })}
              <span className="text-gray-700">{productDetails.rating}</span>
            </div>
            <span className="font-bold">{productDetails.price} EGP</span>
          </div>
          <p>{productDetails.description}</p>
          <div className=" space-y-2">
            <p className="text-base md:text-lg font-semibold capitalize">
              some of our costumes feedback
            </p>
            {productDetails.reviews.map((rev , index) => (
              <div key={index} className="flex items-center gap-1 flex-wrap">
                <User className="text-blue-800 bg-blue-200 p-1 rounded-full" />
                <span className="text-blue-950">{rev.reviewerName} :</span>
                <span className="flex items-center gap-3">{rev.comment} {rev.rating} <Star className="text-yellow-400 fill-yellow-400 text-sm"/>
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center p-2 my-1 justify-between flex-wrap">
            <span className="flex items-center text-green-800 gap-1">
              <Truck className="text-green-800" />
              {productDetails.shippingInformation}
            </span>
            <span>{productDetails.availabilityStatus}</span>
            <span>{productDetails.returnPolicy}</span>
          </div>
        </div>
        <div className="col-span-1 bg-gray-50 shadow rounded-2xl p-5">
          <img src={productDetails.images} />
        </div>
      </div>
   </div>
    </>
  );
};

export default ProductDetails;
