"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";

import { client } from "@/sanity/lib/client";
import { allproducts, tweleve,  } from "@/sanity/lib/query";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const FeactureProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(tweleve);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
     <Link href="/Furniture Products" ><h1 className="text-3xl font-bold mb-8 text-center">Feacture Products</h1></Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="product-card bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition-shadow"
          >
            
            
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
            <p className="text-gray-700 font-medium mb-4">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeactureProduct;
