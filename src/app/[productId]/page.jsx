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
        <BreadCrumb postDetails id={productDetails.id} />
        <div className="max-w-6xl mx-auto p-5 rounded-2xl my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 bg-gray-50 shadow rounded-2xl p-6 flex items-center justify-center">
            <img src={productDetails.thumbnail} className="w-full max-w-sm h-80 object-contain" alt={productDetails.title} />
          </div>
          <div className="col-span-1 space-y-3 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow p-10">
            <p className="font-semibold text-lg md:text-2xl text-blue-950">
              All you need to know about:
            </p>
            <p className="text-gray-500 text-sm md:text-base ">
              {productDetails.title} · {productDetails.category} ·
              {productDetails.brand}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((star, index) => {
                  const filledStar = star < Math.round(productDetails.rating);
                  return (
                    <Star
                      key={index}
                      className={`size-4 ${
                        filledStar
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  );
                })}
                <span className="text-gray-700 text-sm ml-1">
                  {productDetails.rating}
                </span>
              </div>
              <span className="font-bold text-lg text-gray-900">
                {productDetails.price} EGP
              </span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {productDetails.description}
            </p>
            <div className="space-y-4">
              <p className="text-lg capitalize">
                some of our customers feedback
              </p>
              <hr />
              {productDetails.reviews.map((rev, index) => (
                <div key={index}className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <User className="size-8 text-blue-700 bg-blue-100 p-1.5 rounded-full shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-blue-900">
                      {rev.reviewerName}
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {rev.comment}
                    </span>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((star, i) => (
                        <Star key={i} className={`size-4 ${i < rev.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
