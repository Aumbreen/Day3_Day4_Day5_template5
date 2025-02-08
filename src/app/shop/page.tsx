"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";

import { client } from "@/sanity/lib/client";
import { allproducts, seven } from "@/sanity/lib/query";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { AddtoCart } from "../action/action";
import Swal from "sweetalert2";


const ShopPage = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(seven);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    AddtoCart(product);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false, 
      timer: 1000,
    });

  } ;
  
  return (
    <div className="container mx-auto px-4 py-8">
  
      <Link href="/furniture-products">
        <h1 className="text-3xl font-bold mb-8 text-center">Furniture Products</h1>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="product-card bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition-shadow"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.productImage && (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="mx-auto rounded-md"
                />
              )}
              <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
            </Link>

            <p className="text-gray-700 font-medium mb-4">${product.price}</p>

            <button
              className="bg-gradient-to-r from-gray-300 to-gray-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddtoCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ShopPage;
